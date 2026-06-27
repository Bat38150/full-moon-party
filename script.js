// 1) Déploie le fichier apps-script.gs dans Google Apps Script
// 2) Colle ici l'URL du Web App, format : https://script.google.com/macros/s/XXXXX/exec
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwyxUMkzMm1JDwiBxPW_Z4OwXj_AILbbkQ4kBnWUC856gAHd3w4arAonJl7UVJ3oZPQ7A/exec";

const STATUS_OPTIONS = ["À faire", "En cours", "Besoin d'aide", "Commandé", "Réservé", "Livré", "Terminé"];
const INITIAL_TASKS = [
  {
    "id": "T001",
    "theme": "Organisation générale",
    "task": "Définir la date et les horaires",
    "responsable": "Baptiste",
    "status": "Terminé",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T002",
    "theme": "Organisation générale",
    "task": "Définir le budget",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T003",
    "theme": "Organisation générale",
    "task": "Définir le nombre d'invités",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T004",
    "theme": "Organisation générale",
    "task": "Créer un groupe WhatsApp si besoin",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T005",
    "theme": "Organisation générale",
    "task": "Établir le programme de la soirée",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T006",
    "theme": "Organisation générale",
    "task": "Prévoir un plan B pluie",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T007",
    "theme": "Invités & communication",
    "task": "Finaliser la liste des invités",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T008",
    "theme": "Invités & communication",
    "task": "Envoyer les invitations",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T009",
    "theme": "Invités & communication",
    "task": "Suivre les réponses",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T010",
    "theme": "Invités & communication",
    "task": "Relancer les retardataires",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T011",
    "theme": "Invités & communication",
    "task": "Prévenir les voisins",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T012",
    "theme": "Invités & communication",
    "task": "Communiquer les modalités de stationnement",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T013",
    "theme": "Invités & communication",
    "task": "Envoyer un rappel 2 jours avant",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T014",
    "theme": "Boissons",
    "task": "Estimer les quantités",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T015",
    "theme": "Boissons",
    "task": "Acheter eau plate",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T016",
    "theme": "Boissons",
    "task": "Acheter eau gazeuse",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T017",
    "theme": "Boissons",
    "task": "Acheter sodas",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T018",
    "theme": "Boissons",
    "task": "Acheter jus de fruits",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T019",
    "theme": "Boissons",
    "task": "Acheter bière",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T020",
    "theme": "Boissons",
    "task": "Acheter vin rouge",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T021",
    "theme": "Boissons",
    "task": "Acheter vin blanc",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T022",
    "theme": "Boissons",
    "task": "Acheter rosé",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T023",
    "theme": "Boissons",
    "task": "Acheter apéritifs",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T024",
    "theme": "Boissons",
    "task": "Acheter glaçons",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T025",
    "theme": "Boissons",
    "task": "Prévoir seaux et bacs à glace",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T026",
    "theme": "Repas",
    "task": "Définir le menu",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T027",
    "theme": "Repas",
    "task": "Faire la liste de courses",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T028",
    "theme": "Repas",
    "task": "Acheter apéritif salé",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T029",
    "theme": "Repas",
    "task": "Prévoir barbecue ou plancha",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T030",
    "theme": "Repas",
    "task": "Acheter viande",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T031",
    "theme": "Repas",
    "task": "Acheter options végétariennes",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T032",
    "theme": "Repas",
    "task": "Acheter pain",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T033",
    "theme": "Repas",
    "task": "Acheter sauces et condiments",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T034",
    "theme": "Repas",
    "task": "Acheter desserts",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T035",
    "theme": "Repas",
    "task": "Commander ou préparer gâteau",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T036",
    "theme": "Repas",
    "task": "Prévoir café",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T037",
    "theme": "Matériel",
    "task": "Compter le nombre de places assises",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T038",
    "theme": "Matériel",
    "task": "Prévoir tables",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T039",
    "theme": "Matériel",
    "task": "Prévoir chaises",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T040",
    "theme": "Matériel",
    "task": "Prévoir barnum/tente",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T041",
    "theme": "Matériel",
    "task": "Vérifier barbecue",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T042",
    "theme": "Matériel",
    "task": "Vérifier bouteille de gaz",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T043",
    "theme": "Matériel",
    "task": "Prévoir rallonges électriques",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T044",
    "theme": "Matériel",
    "task": "Prévoir multiprises",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T045",
    "theme": "Matériel",
    "task": "Prévoir poubelles",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T046",
    "theme": "Matériel",
    "task": "Prévoir sacs poubelles",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T047",
    "theme": "Ambiance & animation",
    "task": "Préparer playlist",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T048",
    "theme": "Ambiance & animation",
    "task": "Tester la sono",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T049",
    "theme": "Ambiance & animation",
    "task": "Prévoir micro si discours",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T050",
    "theme": "Ambiance & animation",
    "task": "Prévoir éclairage extérieur",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T051",
    "theme": "Ambiance & animation",
    "task": "Mettre en place guirlandes",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T052",
    "theme": "Ambiance & animation",
    "task": "Prévoir espace danse",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T053",
    "theme": "Ambiance & animation",
    "task": "Préparer discours anniversaire",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T054",
    "theme": "Ambiance & animation",
    "task": "Prévoir photos souvenir",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T055",
    "theme": "Accueil & stationnement",
    "task": "Identifier les zones de stationnement",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T056",
    "theme": "Accueil & stationnement",
    "task": "Prévoir un balisage simple",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T057",
    "theme": "Accueil & stationnement",
    "task": "Informer les invités du parking",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T058",
    "theme": "Accueil & stationnement",
    "task": "Vérifier accès PMR si besoin",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T059",
    "theme": "Sécurité & voisinage",
    "task": "Distribuer le mot aux voisins",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T060",
    "theme": "Sécurité & voisinage",
    "task": "Prévoir une heure de baisse de la musique",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T061",
    "theme": "Sécurité & voisinage",
    "task": "Prévoir éclairage des circulations",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T062",
    "theme": "Sécurité & voisinage",
    "task": "Avoir une trousse de secours",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T063",
    "theme": "Sécurité & voisinage",
    "task": "Identifier un conducteur sobre",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T064",
    "theme": "Sécurité & voisinage",
    "task": "Vérifier la météo",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T065",
    "theme": "J-1",
    "task": "Faire les dernières courses",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T066",
    "theme": "J-1",
    "task": "Installer tables et chaises",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T067",
    "theme": "J-1",
    "task": "Installer éclairages",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T068",
    "theme": "J-1",
    "task": "Installer décoration",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T069",
    "theme": "J-1",
    "task": "Tester la sono",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T070",
    "theme": "J-1",
    "task": "Préparer les boissons au frais",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T071",
    "theme": "J-1",
    "task": "Vérifier la météo",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T072",
    "theme": "Jour J",
    "task": "Acheter pain frais",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T073",
    "theme": "Jour J",
    "task": "Acheter glaçons frais",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T074",
    "theme": "Jour J",
    "task": "Sortir les boissons",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T075",
    "theme": "Jour J",
    "task": "Préparer l'apéritif",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T076",
    "theme": "Jour J",
    "task": "Allumer barbecue/plancha",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T077",
    "theme": "Jour J",
    "task": "Accueillir les invités",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T078",
    "theme": "Jour J",
    "task": "Lancer la playlist",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T079",
    "theme": "Jour J",
    "task": "Souffler les bougies 🍰",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T080",
    "theme": "Lendemain",
    "task": "Ranger mobilier",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T081",
    "theme": "Lendemain",
    "task": "Trier les déchets",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T082",
    "theme": "Lendemain",
    "task": "Nettoyer les lieux",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T083",
    "theme": "Lendemain",
    "task": "Restituer matériel loué",
    "responsable": "",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  },
  {
    "id": "T084",
    "theme": "Lendemain",
    "task": "Remercier les invités",
    "responsable": "Baptiste",
    "status": "À faire",
    "echeance": "",
    "commentaires": ""
  }
];

let tasks = [];
let filters = { search:"", theme:"", status:"" };

const $ = (id) => document.getElementById(id);
const isDone = (s) => ["Terminé", "✅", "Fait"].includes(String(s || "").trim());
const nowFr = () => new Date().toLocaleString("fr-FR", { dateStyle:"short", timeStyle:"short" });

function setSync(message) { $("syncStatus").textContent = message; }

async function api(action, payload = null) {
  if (!GOOGLE_SCRIPT_URL) throw new Error("Google Script URL non configurée");
  const url = `${GOOGLE_SCRIPT_URL}?action=${encodeURIComponent(action)}&t=${Date.now()}`;
  if (!payload) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Erreur API " + res.status);
    return res.json();
  }
  // text/plain évite une requête preflight CORS.
  await fetch(url, { method:"POST", mode:"no-cors", headers:{"Content-Type":"text/plain;charset=utf-8"}, body: JSON.stringify({action, ...payload}) });
  return {ok:true};
}

async function loadTasks() {
  try {
    if (!GOOGLE_SCRIPT_URL) throw new Error("Mode démo local");
    setSync("Synchronisation Google Sheets…");
    const data = await api("list");
    tasks = Array.isArray(data.tasks) ? data.tasks : [];
    localStorage.setItem("fullmoon_tasks_cache", JSON.stringify(tasks));
    $("configAlert").classList.add("hidden");
    setSync("Synchronisé · " + nowFr());
  } catch (e) {
    const cache = localStorage.getItem("fullmoon_tasks_cache");
    tasks = cache ? JSON.parse(cache) : structuredClone(INITIAL_TASKS);
    $("configAlert").classList.toggle("hidden", !!GOOGLE_SCRIPT_URL);
    setSync((GOOGLE_SCRIPT_URL ? "Hors ligne / erreur API" : "Mode démo local") + " · " + nowFr());
  }
  populateFilters();
  render();
}

async function saveTask(task) {
  const i = tasks.findIndex(t => t.id === task.id);
  if (i >= 0) tasks[i] = task; else tasks.push(task);
  localStorage.setItem("fullmoon_tasks_cache", JSON.stringify(tasks));
  render();
  try { await api("upsert", {task}); setSync("Enregistré dans Google Sheets · " + nowFr()); }
  catch(e) { setSync("Enregistré localement uniquement · " + nowFr()); }
}

function populateFilters() {
  const themes = [...new Set(tasks.map(t => t.theme).filter(Boolean))].sort();
  $("themeFilter").innerHTML = '<option value="">Toutes les thématiques</option>' + themes.map(t => `<option ${filters.theme===t?'selected':''} value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("");
  $("statusFilter").innerHTML = '<option value="">Tous les statuts</option>' + STATUS_OPTIONS.map(s => `<option ${filters.status===s?'selected':''} value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join("");
  $("taskStatus").innerHTML = STATUS_OPTIONS.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join("");
}

function filteredTasks() {
  const q = filters.search.toLowerCase().trim();
  return tasks.filter(t =>
    (!filters.theme || t.theme === filters.theme) &&
    (!filters.status || t.status === filters.status) &&
    (!q || [t.theme,t.task,t.responsable,t.status,t.echeance,t.commentaires].join(" ").toLowerCase().includes(q))
  );
}

function render() {
  const visible = filteredTasks();
  const done = tasks.filter(t => isDone(t.status)).length;
  const pct = tasks.length ? Math.round(done / tasks.length * 100) : 0;
  $("doneCount").textContent = done;
  $("totalCount").textContent = tasks.length;
  $("percentCount").textContent = pct + "%";
  $("progressBar").style.width = pct + "%";

  const byTheme = visible.reduce((acc,t)=>{ (acc[t.theme] ||= []).push(t); return acc; }, {});
  $("board").innerHTML = Object.entries(byTheme).map(([theme, list]) => {
    const d = list.filter(t => isDone(t.status)).length;
    return `<article class="theme-block">
      <div class="theme-header"><h2>${escapeHtml(theme)}</h2><span class="count">${d} / ${list.length}</span></div>
      <div class="tasks">${list.map(taskHtml).join("")}</div>
    </article>`;
  }).join("") || `<div class="config-alert"><strong>Aucune tâche trouvée.</strong></div>`;
}

function taskHtml(t) {
  const done = isDone(t.status);
  const chipClass = done ? "donechip" : (t.status === "En cours" ? "progress" : "todo");
  return `<div class="task ${done?'done':''}" data-id="${escapeHtml(t.id)}">
    <button class="check" title="Basculer terminé" onclick="toggleDone('${escapeJs(t.id)}')"></button>
    <div><div class="task-title">${escapeHtml(t.task)}</div><div class="muted">${escapeHtml(t.commentaires || '')}</div></div>
    <div class="muted">${escapeHtml(t.responsable || 'Non attribué')}</div>
    <span class="chip ${chipClass}">${escapeHtml(t.status || 'À faire')}</span>
    <div class="muted">${t.echeance ? 'Échéance : ' + escapeHtml(t.echeance) : ''}</div>
    <button class="btn btn--ghost edit" onclick="openEdit('${escapeJs(t.id)}')">Modifier</button>
  </div>`;
}

window.toggleDone = async (id) => {
  const t = tasks.find(x => x.id === id); if (!t) return;
  await saveTask({...t, status: isDone(t.status) ? "À faire" : "Terminé"});
};
window.openEdit = (id) => openDialog(tasks.find(t => t.id === id));

function openDialog(task=null) {
  $("dialogTitle").textContent = task ? "Modifier une tâche" : "Ajouter une tâche";
  $("taskId").value = task?.id || "";
  $("taskTheme").value = task?.theme || filters.theme || "";
  $("taskName").value = task?.task || "";
  $("taskOwner").value = task?.responsable || "";
  $("taskStatus").value = task?.status || "À faire";
  $("taskDue").value = task?.echeance || "";
  $("taskComments").value = task?.commentaires || "";
  $("taskDialog").showModal();
}

$("taskForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = $("taskId").value || "T" + Date.now();
  await saveTask({ id, theme: $("taskTheme").value.trim(), task: $("taskName").value.trim(), responsable: $("taskOwner").value.trim(), status: $("taskStatus").value, echeance: $("taskDue").value, commentaires: $("taskComments").value.trim() });
  populateFilters();
  $("taskDialog").close();
});

$("cancelDialog").onclick = () => $("taskDialog").close();
$("addBtn").onclick = () => openDialog();
$("refreshBtn").onclick = () => loadTasks();
$("searchInput").oninput = (e) => { filters.search = e.target.value; render(); };
$("themeFilter").onchange = (e) => { filters.theme = e.target.value; render(); };
$("statusFilter").onchange = (e) => { filters.status = e.target.value; render(); };

function escapeHtml(s) { return String(s ?? "").replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function escapeJs(s) { return String(s ?? "").replace(/\/g,"\\").replace(/'/g,"\'"); }

loadTasks();
