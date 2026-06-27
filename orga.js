"use strict";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw_IZKHcjHUd9ogsawLIr8yRnov40qLo82ckAI3SBqn0ubZ9SFjsVim90R1QCU7Kv2Gvw/exec";
const ORGA_PASSWORD = "fullmoon2026";
const STATUS_OPTIONS = ["À faire", "En cours", "Besoin d'aide", "Commandé", "Réservé", "Livré", "Terminé"];
const INITIAL_TASKS = [];

let tasks = [];
let filters = { search: "", theme: "", status: "" };

function el(id) { return document.getElementById(id); }
function isDone(status) { return ["Terminé", "✅", "Fait"].includes(String(status || "").trim()); }
function nowFr() { return new Date().toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" }); }
function setSync(message) { if (el("syncStatus")) el("syncStatus").textContent = message; }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function escapeJs(value) { return String(value ?? "").replace(/\/g, "\\").replace(/'/g, "\'"); }

function orgaIsUnlocked() {
  return localStorage.getItem("fullmoon_v22_unlocked") === "1" || localStorage.getItem("fullmoon_v21_unlocked") === "1";
}
function orgaUnlock() {
  localStorage.setItem("fullmoon_v22_unlocked", "1");
  localStorage.setItem("fullmoon_v21_unlocked", "1");
}
function orgaLogout() {
  localStorage.removeItem("fullmoon_v22_unlocked");
  localStorage.removeItem("fullmoon_v21_unlocked");
  location.href = "organisation.html";
}
window.orgaLogout = orgaLogout;

function requireOrgaAccess() {
  if (!orgaIsUnlocked()) location.href = "organisation.html";
}

function jsonp(action, params = {}) {
  return new Promise((resolve, reject) => {
    const callbackName = "fullmoon_cb_" + Date.now() + "_" + Math.random().toString(36).slice(2);
    const query = new URLSearchParams({ action, callback: callbackName, t: Date.now(), ...params });
    const script = document.createElement("script");
    const timer = setTimeout(() => { cleanup(); reject(new Error("Timeout API")); }, 12000);
    function cleanup() { clearTimeout(timer); try { delete window[callbackName]; } catch(e) { window[callbackName] = undefined; } script.remove(); }
    window[callbackName] = data => { cleanup(); resolve(data); };
    script.onerror = () => { cleanup(); reject(new Error("Erreur chargement API")); };
    script.src = GOOGLE_SCRIPT_URL + "?" + query.toString();
    document.body.appendChild(script);
  });
}

async function postTask(task) {
  const form = new FormData();
  form.append("payload", JSON.stringify({ action: "upsert", task }));
  await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", body: form });
}

async function loadTasks() {
  try {
    setSync("Synchronisation Google Sheets…");
    const data = await jsonp("list");
    tasks = Array.isArray(data.tasks) ? data.tasks : [];
    if (!tasks.length) throw new Error("Aucune tâche renvoyée par Google Sheets");
    localStorage.setItem("fullmoon_tasks_cache", JSON.stringify(tasks));
    if (el("configAlert")) el("configAlert").classList.add("hidden");
    setSync("Synchronisé · " + nowFr());
  } catch (error) {
    const cache = localStorage.getItem("fullmoon_tasks_cache");
    tasks = cache ? JSON.parse(cache) : INITIAL_TASKS;
    if (el("configAlert")) el("configAlert").classList.remove("hidden");
    setSync("Mode secours local · " + nowFr() + " · " + error.message);
  }
  populateFilters();
  render();
}

async function saveTask(task) {
  const index = tasks.findIndex(t => t.id === task.id);
  if (index >= 0) tasks[index] = task; else tasks.push(task);
  localStorage.setItem("fullmoon_tasks_cache", JSON.stringify(tasks));
  populateFilters();
  render();
  try { await postTask(task); setSync("Enregistrement envoyé · resynchronisation…"); setTimeout(loadTasks, 900); }
  catch (error) { setSync("Enregistré localement uniquement · " + nowFr()); }
}

function populateFilters() {
  if (!el("themeFilter") || !el("statusFilter") || !el("taskStatus")) return;
  const themes = Array.from(new Set(tasks.map(t => t.theme).filter(Boolean))).sort();
  el("themeFilter").innerHTML = '<option value="">Toutes les thématiques</option>' + themes.map(theme => `<option ${filters.theme === theme ? "selected" : ""} value="${escapeHtml(theme)}">${escapeHtml(theme)}</option>`).join("");
  el("statusFilter").innerHTML = '<option value="">Tous les statuts</option>' + STATUS_OPTIONS.map(status => `<option ${filters.status === status ? "selected" : ""} value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");
  el("taskStatus").innerHTML = STATUS_OPTIONS.map(status => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`).join("");
}

function filteredTasks() {
  const query = filters.search.toLowerCase().trim();
  return tasks.filter(t => {
    const content = [t.theme, t.task, t.responsable, t.status, t.echeance, t.commentaires].join(" ").toLowerCase();
    return (!filters.theme || t.theme === filters.theme) && (!filters.status || t.status === filters.status) && (!query || content.includes(query));
  });
}

function render() {
  if (!el("board")) return;
  const visible = filteredTasks();
  const done = tasks.filter(t => isDone(t.status)).length;
  const percent = tasks.length ? Math.round(done / tasks.length * 100) : 0;
  if (el("doneCount")) el("doneCount").textContent = done;
  if (el("totalCount")) el("totalCount").textContent = tasks.length;
  if (el("percentCount")) el("percentCount").textContent = percent + "%";
  if (el("progressBar")) el("progressBar").style.width = percent + "%";
  const byTheme = {};
  visible.forEach(t => { if (!byTheme[t.theme]) byTheme[t.theme] = []; byTheme[t.theme].push(t); });
  el("board").innerHTML = Object.keys(byTheme).map(theme => {
    const list = byTheme[theme];
    const doneInTheme = list.filter(t => isDone(t.status)).length;
    return `<article class="theme-block"><div class="theme-header"><h2>${escapeHtml(theme)}</h2><span class="count">${doneInTheme} / ${list.length}</span></div><div class="tasks">${list.map(taskHtml).join("")}</div></article>`;
  }).join("") || '<div class="alert empty"><strong>Aucune tâche trouvée.</strong></div>';
}

function taskHtml(t) {
  const done = isDone(t.status);
  const chipClass = done ? "donechip" : (t.status === "En cours" ? "progresschip" : "todo");
  return `<div class="task ${done ? "done" : ""}">
    <button class="check" type="button" title="Basculer terminé" onclick="toggleDone('${escapeJs(t.id)}')"></button>
    <div><div class="task-title">${escapeHtml(t.task)}</div><div class="muted mini">${escapeHtml(t.commentaires || "")}</div></div>
    <div class="muted mini">${escapeHtml(t.responsable || "Non attribué")}</div>
    <span class="chip ${chipClass}">${escapeHtml(t.status || "À faire")}</span>
    <div class="muted mini">${t.echeance ? "Échéance : " + escapeHtml(t.echeance) : ""}</div>
    <button class="btn btn-ghost" type="button" onclick="openEdit('${escapeJs(t.id)}')">Modifier</button>
  </div>`;
}

function openDialog(task) {
  if (!el("taskDialog")) return;
  el("dialogTitle").textContent = task ? "Modifier une tâche" : "Ajouter une tâche";
  el("taskId").value = task ? task.id : "";
  el("taskTheme").value = task ? task.theme : (filters.theme || "");
  el("taskName").value = task ? task.task : "";
  el("taskOwner").value = task ? (task.responsable || "") : "";
  el("taskStatus").value = task ? (task.status || "À faire") : "À faire";
  el("taskDue").value = task ? (task.echeance || "") : "";
  el("taskComments").value = task ? (task.commentaires || "") : "";
  el("taskDialog").showModal();
}
window.openEdit = id => openDialog(tasks.find(t => t.id === id));
window.toggleDone = async id => {
  const task = tasks.find(t => t.id === id);
  if (task) await saveTask({ ...task, status: isDone(task.status) ? "À faire" : "Terminé" });
};
window.openDialog = openDialog;

function initLoginPage() {
  const loginBtn = el("loginBtn");
  const passwordInput = el("passwordInput");
  const loginPanel = el("loginPanel");
  const orgaHome = el("orgaHome");
  if (!loginBtn || !passwordInput) return false;
  function showHome() { if (loginPanel) loginPanel.classList.add("hidden"); if (orgaHome) orgaHome.classList.remove("hidden"); }
  if (orgaIsUnlocked()) showHome();
  loginBtn.addEventListener("click", () => {
    if (passwordInput.value.trim() === ORGA_PASSWORD) { orgaUnlock(); showHome(); }
    else if (el("loginError")) el("loginError").textContent = "Mot de passe incorrect.";
  });
  passwordInput.addEventListener("keydown", e => { if (e.key === "Enter") loginBtn.click(); });
  return true;
}

function initTasksPage() {
  if (!el("board")) return;
  requireOrgaAccess();
  if (el("taskForm")) el("taskForm").addEventListener("submit", async event => {
    event.preventDefault();
    const id = el("taskId").value || "T" + Date.now();
    await saveTask({ id, theme: el("taskTheme").value.trim(), task: el("taskName").value.trim(), responsable: el("taskOwner").value.trim(), status: el("taskStatus").value, echeance: el("taskDue").value, commentaires: el("taskComments").value.trim() });
    el("taskDialog").close();
  });
  if (el("cancelDialog")) el("cancelDialog").addEventListener("click", () => el("taskDialog").close());
  if (el("addBtn")) el("addBtn").addEventListener("click", () => openDialog(null));
  if (el("refreshBtn")) el("refreshBtn").addEventListener("click", loadTasks);
  if (el("searchInput")) el("searchInput").addEventListener("input", event => { filters.search = event.target.value; render(); });
  if (el("themeFilter")) el("themeFilter").addEventListener("change", event => { filters.theme = event.target.value; render(); });
  if (el("statusFilter")) el("statusFilter").addEventListener("change", event => { filters.status = event.target.value; render(); });
  loadTasks();
}

document.addEventListener("DOMContentLoaded", () => {
  initLoginPage();
  initTasksPage();
});
