"use strict";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw_IZKHcjHUd9ogsawLIr8yRnov40qLo82ckAI3SBqn0ubZ9SFjsVim90R1QCU7Kv2Gvw/exec";
const ORGA_PASSWORD = "fullmoon2026";
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
let filters = { search: "", theme: "", status: "" };

function el(id) { return document.getElementById(id); }
function isDone(status) { return ["Terminé", "✅", "Fait"].includes(String(status || "").trim()); }
function nowFr() { return new Date().toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" }); }
function setSync(message) { const node = el("syncStatus"); if (node) node.textContent = message; }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, function(c) { return {"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]; }); }
function escapeJs(value) { return String(value ?? "").replace(/\/g, "\\").replace(/'/g, "\'"); }
function cloneInitialTasks() { return JSON.parse(JSON.stringify(INITIAL_TASKS)); }

function jsonp(action, params) {
  params = params || {};
  return new Promise(function(resolve, reject) {
    const callbackName = "fullmoon_cb_" + Date.now() + "_" + Math.random().toString(36).slice(2);
    const query = new URLSearchParams(Object.assign({ action: action, callback: callbackName, t: Date.now() }, params));
    const script = document.createElement("script");
    const timer = setTimeout(function() { cleanup(); reject(new Error("Timeout API")); }, 12000);
    function cleanup() { clearTimeout(timer); try { delete window[callbackName]; } catch(e) { window[callbackName] = undefined; } script.remove(); }
    window[callbackName] = function(data) { cleanup(); resolve(data); };
    script.onerror = function() { cleanup(); reject(new Error("Erreur chargement API")); };
    script.src = GOOGLE_SCRIPT_URL + "?" + query.toString();
    document.body.appendChild(script);
  });
}

async function postTask(task) {
  const form = new FormData();
  form.append("payload", JSON.stringify({ action: "upsert", task: task }));
  await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", body: form });
}

async function loadTasks() {
  try {
    setSync("Synchronisation Google Sheets…");
    const data = await jsonp("list");
    tasks = Array.isArray(data.tasks) ? data.tasks : [];
    if (!tasks.length) throw new Error("Aucune tâche renvoyée par Google Sheets");
    localStorage.setItem("fullmoon_v21_tasks_cache", JSON.stringify(tasks));
    el("configAlert").classList.add("hidden");
    setSync("Synchronisé · " + nowFr());
  } catch (error) {
    const cache = localStorage.getItem("fullmoon_v21_tasks_cache");
    tasks = cache ? JSON.parse(cache) : cloneInitialTasks();
    el("configAlert").classList.remove("hidden");
    setSync("Mode secours local · " + nowFr() + " · " + error.message);
  }
  populateFilters();
  render();
}

async function saveTask(task) {
  const index = tasks.findIndex(function(t) { return t.id === task.id; });
  if (index >= 0) tasks[index] = task; else tasks.push(task);
  localStorage.setItem("fullmoon_v21_tasks_cache", JSON.stringify(tasks));
  populateFilters(); render();
  try { await postTask(task); setSync("Enregistrement envoyé · resynchronisation…"); setTimeout(loadTasks, 900); }
  catch (error) { setSync("Enregistré localement uniquement · " + nowFr()); }
}

function populateFilters() {
  const themes = Array.from(new Set(tasks.map(function(t) { return t.theme; }).filter(Boolean))).sort();
  el("themeFilter").innerHTML = '<option value="">Toutes les thématiques</option>' + themes.map(function(theme) { return '<option ' + (filters.theme === theme ? 'selected' : '') + ' value="' + escapeHtml(theme) + '">' + escapeHtml(theme) + '</option>'; }).join('');
  el("statusFilter").innerHTML = '<option value="">Tous les statuts</option>' + STATUS_OPTIONS.map(function(status) { return '<option ' + (filters.status === status ? 'selected' : '') + ' value="' + escapeHtml(status) + '">' + escapeHtml(status) + '</option>'; }).join('');
  el("taskStatus").innerHTML = STATUS_OPTIONS.map(function(status) { return '<option value="' + escapeHtml(status) + '">' + escapeHtml(status) + '</option>'; }).join('');
}

function filteredTasks() {
  const query = filters.search.toLowerCase().trim();
  return tasks.filter(function(t) {
    const content = [t.theme, t.task, t.responsable, t.status, t.echeance, t.commentaires].join(' ').toLowerCase();
    return (!filters.theme || t.theme === filters.theme) && (!filters.status || t.status === filters.status) && (!query || content.includes(query));
  });
}

function render() {
  const visible = filteredTasks();
  const done = tasks.filter(function(t) { return isDone(t.status); }).length;
  const percent = tasks.length ? Math.round(done / tasks.length * 100) : 0;
  el("doneCount").textContent = done; el("totalCount").textContent = tasks.length; el("percentCount").textContent = percent + "%"; el("progressBar").style.width = percent + "%";
  const byTheme = {};
  visible.forEach(function(t) { if (!byTheme[t.theme]) byTheme[t.theme] = []; byTheme[t.theme].push(t); });
  const html = Object.keys(byTheme).map(function(theme) {
    const list = byTheme[theme];
    const doneInTheme = list.filter(function(t) { return isDone(t.status); }).length;
    return '<article class="theme-block"><div class="theme-header"><h2>' + escapeHtml(theme) + '</h2><span class="count">' + doneInTheme + ' / ' + list.length + '</span></div><div class="tasks">' + list.map(taskHtml).join('') + '</div></article>';
  }).join('');
  el("board").innerHTML = html || '<div class="alert empty"><strong>Aucune tâche trouvée.</strong></div>';
}

function taskHtml(t) {
  const done = isDone(t.status);
  const chipClass = done ? 'donechip' : (t.status === 'En cours' ? 'progresschip' : 'todo');
  return '<div class="task ' + (done ? 'done' : '') + '">' +
    '<button class="check" type="button" title="Basculer terminé" onclick="toggleDone('' + escapeJs(t.id) + '')"></button>' +
    '<div><div class="task-title">' + escapeHtml(t.task) + '</div><div class="muted mini">' + escapeHtml(t.commentaires || '') + '</div></div>' +
    '<div class="muted mini">' + escapeHtml(t.responsable || 'Non attribué') + '</div>' +
    '<span class="chip ' + chipClass + '">' + escapeHtml(t.status || 'À faire') + '</span>' +
    '<div class="muted mini">' + (t.echeance ? 'Échéance : ' + escapeHtml(t.echeance) : '') + '</div>' +
    '<button class="btn btn-ghost" type="button" onclick="openEdit('' + escapeJs(t.id) + '')">Modifier</button>' +
    '</div>';
}

function openDialog(task) {
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

window.toggleDone = async function(id) { const task = tasks.find(function(t) { return t.id === id; }); if (task) await saveTask(Object.assign({}, task, { status: isDone(task.status) ? "À faire" : "Terminé" })); };
window.openEdit = function(id) { openDialog(tasks.find(function(t) { return t.id === id; })); };

function unlock() {
  localStorage.setItem("fullmoon_v21_unlocked", "1");
  el("loginPanel").classList.add("hidden");
  el("orgaApp").classList.remove("hidden");
  loadTasks();
}

function init() {
  el("loginBtn").addEventListener("click", function() {
    const value = el("passwordInput").value.trim();
    if (value === ORGA_PASSWORD) unlock(); else el("loginError").textContent = "Mot de passe incorrect. Code attendu : fullmoon2026";
  });
  el("passwordInput").addEventListener("keydown", function(event) { if (event.key === "Enter") el("loginBtn").click(); });
  el("taskForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const id = el("taskId").value || "T" + Date.now();
    await saveTask({ id: id, theme: el("taskTheme").value.trim(), task: el("taskName").value.trim(), responsable: el("taskOwner").value.trim(), status: el("taskStatus").value, echeance: el("taskDue").value, commentaires: el("taskComments").value.trim() });
    el("taskDialog").close();
  });
  el("cancelDialog").addEventListener("click", function() { el("taskDialog").close(); });
  el("addBtn").addEventListener("click", function() { openDialog(null); });
  el("refreshBtn").addEventListener("click", loadTasks);
  el("searchInput").addEventListener("input", function(event) { filters.search = event.target.value; render(); });
  el("themeFilter").addEventListener("change", function(event) { filters.theme = event.target.value; render(); });
  el("statusFilter").addEventListener("change", function(event) { filters.status = event.target.value; render(); });
  if (localStorage.getItem("fullmoon_v21_unlocked") === "1") unlock();
}

document.addEventListener("DOMContentLoaded", init);
