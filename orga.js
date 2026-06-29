"use strict";

/* =========================================================
   CONFIGURATION
========================================================= */

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw_IZKHcjHUd9ogsawLIr8yRnov40qLo82ckAI3SBqn0ubZ9SFjsVim90R1QCU7Kv2Gvw/exec";

const STATUS_OPTIONS = [
    "À faire",
    "En cours",
    "Besoin d'aide",
    "Commandé",
    "Réservé",
    "Livré",
    "Terminé"
];

let tasks = [];

let filters = {
    search: "",
    theme: "",
    status: ""
};


/* =========================================================
   OUTILS GÉNÉRAUX
========================================================= */

function el(id) {
    return document.getElementById(id);
}

function isDone(status) {
    return ["Terminé", "✅", "Fait"].includes(String(status || "").trim());
}

function nowFr() {
    return new Date().toLocaleString("fr-FR", {
        dateStyle: "short",
        timeStyle: "short"
    });
}

function setSync(message) {
    if (el("syncStatus")) {
        el("syncStatus").textContent = message;
    }
}

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}

function escapeJs(value) {
    return String(value ?? "")
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");
}

function decodeHtmlEntities(value) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = String(value ?? "");
    return textarea.value;
}

function normalizeTask(task) {
    return {
        id: decodeHtmlEntities(task.id),
        theme: decodeHtmlEntities(task.theme),
        task: decodeHtmlEntities(task.task),
        responsable: decodeHtmlEntities(task.responsable),
        status: decodeHtmlEntities(task.status),
        echeance: decodeHtmlEntities(task.echeance),
        commentaires: decodeHtmlEntities(task.commentaires)
    };
}


/* =========================================================
   ACCÈS ORGANISATION
========================================================= */

function hasOrgaAccess() {
    if (typeof window.orgaIsUnlocked === "function") {
        return window.orgaIsUnlocked();
    }

    return (
        localStorage.getItem("fullmoon_v22_unlocked") === "1" ||
        localStorage.getItem("fullmoon_v21_unlocked") === "1"
    );
}

function requireOrgaAccess() {
    if (!hasOrgaAccess()) {
        window.location.href = "organisation.html";
    }
}

if (typeof window.orgaLogout !== "function") {
    window.orgaLogout = function () {
        localStorage.removeItem("fullmoon_v22_unlocked");
        localStorage.removeItem("fullmoon_v21_unlocked");
        window.location.href = "organisation.html";
    };
}


/* =========================================================
   CONNEXION GOOGLE SHEETS — JSONP
========================================================= */

function jsonp(action, params = {}) {
    return new Promise(function (resolve, reject) {
        const callbackName =
            "fullmoon_cb_" +
            Date.now() +
            "_" +
            Math.random().toString(36).slice(2);

        const query = new URLSearchParams({
            action: action,
            callback: callbackName,
            t: Date.now(),
            ...params
        });

        const script = document.createElement("script");

        const timer = setTimeout(function () {
            cleanup();
            reject(new Error("Timeout API"));
        }, 12000);

        function cleanup() {
            clearTimeout(timer);

            try {
                delete window[callbackName];
            } catch (error) {
                window[callbackName] = undefined;
            }

            script.remove();
        }

        window[callbackName] = function (data) {
            cleanup();
            resolve(data);
        };

        script.onerror = function () {
            cleanup();
            reject(new Error("Erreur chargement API"));
        };

        script.src = GOOGLE_SCRIPT_URL + "?" + query.toString();

        document.body.appendChild(script);
    });
}

async function postTask(task) {
    const form = new FormData();

    form.append(
        "payload",
        JSON.stringify({
            action: "upsert",
            task: task
        })
    );

    await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: form
    });
}


/* =========================================================
   CHARGEMENT DES TÂCHES
========================================================= */

async function loadTasks() {
    try {
        setSync("Synchronisation Google Sheets…");

        const data = await jsonp("list");

        console.log("Réponse Google Sheets :", data);

        tasks = Array.isArray(data.tasks)
            ? data.tasks.map(normalizeTask)
            : [];

        if (!tasks.length) {
            throw new Error("Aucune tâche renvoyée par Google Sheets");
        }

        localStorage.setItem(
            "fullmoon_tasks_cache",
            JSON.stringify(tasks)
        );

        if (el("configAlert")) {
            el("configAlert").classList.add("hidden");
        }

        setSync("Synchronisé · " + nowFr());
    } catch (error) {
        console.error("Erreur synchronisation :", error);

        const cache = localStorage.getItem("fullmoon_tasks_cache");

        tasks = cache ? JSON.parse(cache) : [];

        if (el("configAlert")) {
            el("configAlert").classList.remove("hidden");
        }

        setSync("Erreur synchro · " + error.message);
    }

    populateFilters();
    render();
}

async function saveTask(task) {
    const index = tasks.findIndex(function (item) {
        return item.id === task.id;
    });

    if (index >= 0) {
        tasks[index] = task;
    } else {
        tasks.push(task);
    }

    localStorage.setItem(
        "fullmoon_tasks_cache",
        JSON.stringify(tasks)
    );

    populateFilters();
    render();

    try {
        await postTask(task);

        setSync("Enregistrement envoyé · resynchronisation…");

        setTimeout(loadTasks, 900);
    } catch (error) {
        console.error("Erreur enregistrement :", error);

        setSync("Enregistré localement uniquement · " + nowFr());
    }
}


/* =========================================================
   FILTRES
========================================================= */

function populateFilters() {
    if (!el("themeFilter") || !el("statusFilter") || !el("taskStatus")) {
        return;
    }

    const themes = Array.from(
        new Set(
            tasks
                .map(function (task) {
                    return task.theme;
                })
                .filter(Boolean)
        )
    ).sort();

    el("themeFilter").innerHTML =
        '<option value="">Toutes les thématiques</option>' +
        themes
            .map(function (theme) {
                return `
                    <option ${filters.theme === theme ? "selected" : ""}
                            value="${escapeHtml(theme)}">
                        ${escapeHtml(theme)}
                    </option>
                `;
            })
            .join("");

    el("statusFilter").innerHTML =
        '<option value="">Tous les statuts</option>' +
        STATUS_OPTIONS
            .map(function (status) {
                return `
                    <option ${filters.status === status ? "selected" : ""}
                            value="${escapeHtml(status)}">
                        ${escapeHtml(status)}
                    </option>
                `;
            })
            .join("");

    el("taskStatus").innerHTML = STATUS_OPTIONS
        .map(function (status) {
            return `
                <option value="${escapeHtml(status)}">
                    ${escapeHtml(status)}
                </option>
            `;
        })
        .join("");
}

function filteredTasks() {
    const query = filters.search.toLowerCase().trim();

    return tasks.filter(function (task) {
        const content = [
            task.theme,
            task.task,
            task.responsable,
            task.status,
            task.echeance,
            task.commentaires
        ]
            .join(" ")
            .toLowerCase();

        return (
            (!filters.theme || task.theme === filters.theme) &&
            (!filters.status || task.status === filters.status) &&
            (!query || content.includes(query))
        );
    });
}


/* =========================================================
   AFFICHAGE
========================================================= */

function render() {
    if (!el("board")) {
        return;
    }

    const visibleTasks = filteredTasks();

    const doneCount = tasks.filter(function (task) {
        return isDone(task.status);
    }).length;

    const percent = tasks.length
        ? Math.round((doneCount / tasks.length) * 100)
        : 0;

    if (el("doneCount")) {
        el("doneCount").textContent = doneCount;
    }

    if (el("totalCount")) {
        el("totalCount").textContent = tasks.length;
    }

    if (el("percentCount")) {
        el("percentCount").textContent = percent + "%";
    }

    if (el("progressBar")) {
        el("progressBar").style.width = percent + "%";
    }

    const byTheme = {};

    visibleTasks.forEach(function (task) {
        if (!byTheme[task.theme]) {
            byTheme[task.theme] = [];
        }

        byTheme[task.theme].push(task);
    });

    const html = Object.keys(byTheme)
        .map(function (theme) {
            const themeTasks = byTheme[theme];

            const doneInTheme = themeTasks.filter(function (task) {
                return isDone(task.status);
            }).length;

            return `
                <article class="theme-block">
                    <div class="theme-header">
                        <h2>${escapeHtml(theme)}</h2>
                        <span class="count">
                            ${doneInTheme} / ${themeTasks.length}
                        </span>
                    </div>

                    <div class="tasks">
                        ${themeTasks.map(taskHtml).join("")}
                    </div>
                </article>
            `;
        })
        .join("");

    el("board").innerHTML =
        html ||
        `
            <div class="alert empty">
                <strong>Aucune tâche trouvée.</strong>
            </div>
        `;
}

function taskHtml(task) {
    const done = isDone(task.status);

    const chipClass = done
        ? "donechip"
        : task.status === "En cours"
            ? "progresschip"
            : "todo";

    return `
        <div class="task ${done ? "done" : ""}">
            <button class="check"
                    type="button"
                    title="Basculer terminé"
                    onclick="toggleDone('${escapeJs(task.id)}')">
            </button>

            <div>
                <div class="task-title">
                    ${escapeHtml(task.task)}
                </div>

                <div class="muted mini">
                    ${escapeHtml(task.commentaires || "")}
                </div>
            </div>

            <div class="muted mini">
                ${escapeHtml(task.responsable || "Non attribué")}
            </div>

            <span class="chip ${chipClass}">
                ${escapeHtml(task.status || "À faire")}
            </span>

            <div class="muted mini">
                ${
                    task.echeance
                        ? "Échéance : " + escapeHtml(task.echeance)
                        : ""
                }
            </div>

            <button class="btn btn-ghost"
                    type="button"
                    onclick="openEdit('${escapeJs(task.id)}')">
                Modifier
            </button>
        </div>
    `;
}


/* =========================================================
   MODALE AJOUT / MODIFICATION
========================================================= */

function openDialog(task) {
    if (!el("taskDialog")) {
        return;
    }

    el("dialogTitle").textContent = task
        ? "Modifier une tâche"
        : "Ajouter une tâche";

    el("taskId").value = task ? task.id : "";
    el("taskTheme").value = task ? task.theme : filters.theme || "";
    el("taskName").value = task ? task.task : "";
    el("taskOwner").value = task ? task.responsable || "" : "";
    el("taskStatus").value = task ? task.status || "À faire" : "À faire";
    el("taskDue").value = task ? task.echeance || "" : "";
    el("taskComments").value = task ? task.commentaires || "" : "";

    el("taskDialog").showModal();
}

window.openEdit = function (id) {
    const task = tasks.find(function (item) {
        return item.id === id;
    });

    openDialog(task);
};

window.toggleDone = async function (id) {
    const task = tasks.find(function (item) {
        return item.id === id;
    });

    if (!task) {
        return;
    }

    await saveTask({
        ...task,
        status: isDone(task.status) ? "À faire" : "Terminé"
    });
};

window.openDialog = openDialog;


/* =========================================================
   INITIALISATION
========================================================= */

function initTasksPage() {
    if (!el("board")) {
        return;
    }

    requireOrgaAccess();

    if (el("taskForm")) {
        el("taskForm").addEventListener("submit", async function (event) {
            event.preventDefault();

            const id = el("taskId").value || "T" + Date.now();

            await saveTask({
                id: id,
                theme: el("taskTheme").value.trim(),
                task: el("taskName").value.trim(),
                responsable: el("taskOwner").value.trim(),
                status: el("taskStatus").value,
                echeance: el("taskDue").value,
                commentaires: el("taskComments").value.trim()
            });

            el("taskDialog").close();
        });
    }

    if (el("cancelDialog")) {
        el("cancelDialog").addEventListener("click", function () {
            el("taskDialog").close();
        });
    }

    if (el("addBtn")) {
        el("addBtn").addEventListener("click", function () {
            openDialog(null);
        });
    }

    if (el("refreshBtn")) {
        el("refreshBtn").addEventListener("click", loadTasks);
    }

    if (el("searchInput")) {
        el("searchInput").addEventListener("input", function (event) {
            filters.search = event.target.value;
            render();
        });
    }

    if (el("themeFilter")) {
        el("themeFilter").addEventListener("change", function (event) {
            filters.theme = event.target.value;
            render();
        });
    }

    if (el("statusFilter")) {
        el("statusFilter").addEventListener("change", function (event) {
            filters.status = event.target.value;
            render();
        });
    }

    loadTasks();
}

document.addEventListener("DOMContentLoaded", function () {
    initTasksPage();
});
