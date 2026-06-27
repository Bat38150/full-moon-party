const SHEET_NAME = 'Taches';
const HEADERS = ['id','theme','task','responsable','status','echeance','commentaires','updatedAt'];
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

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  const currentHeaders = sheet.getRange(1,1,1,HEADERS.length).getValues()[0];
  if (currentHeaders.join('|') !== HEADERS.join('|')) sheet.getRange(1,1,1,HEADERS.length).setValues([HEADERS]);
  if (sheet.getLastRow() < 2) {
    const rows = INITIAL_TASKS.map(t => [t.id,t.theme,t.task,t.responsable,t.status,t.echeance,t.commentaires,new Date()]);
    sheet.getRange(2,1,rows.length,HEADERS.length).setValues(rows);
  }
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, HEADERS.length);
  return true;
}

function doGet(e) {
  setup();
  const action = (e.parameter.action || 'list').toLowerCase();
  if (action === 'setup') return json_({ok:true});
  return json_({ok:true, tasks:getTasks_()});
}

function doPost(e) {
  setup();
  const body = JSON.parse(e.postData.contents || '{}');
  if (body.action === 'upsert' && body.task) upsertTask_(body.task);
  return json_({ok:true});
}

function getTasks_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const values = sh.getDataRange().getValues();
  const rows = values.slice(1);
  return rows.filter(r => r[0]).map(r => ({
    id:String(r[0]), theme:String(r[1]||''), task:String(r[2]||''), responsable:String(r[3]||''),
    status:String(r[4]||'À faire'), echeance:formatDate_(r[5]), commentaires:String(r[6]||'')
  }));
}

function upsertTask_(task) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const ids = sh.getLastRow() > 1 ? sh.getRange(2,1,sh.getLastRow()-1,1).getValues().flat().map(String) : [];
  const rowValues = [task.id, task.theme, task.task, task.responsable, task.status, task.echeance, task.commentaires, new Date()];
  const index = ids.indexOf(String(task.id));
  if (index >= 0) sh.getRange(index+2,1,1,HEADERS.length).setValues([rowValues]);
  else sh.appendRow(rowValues);
}

function formatDate_(v) {
  if (!v) return '';
  if (Object.prototype.toString.call(v) === '[object Date]') return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  return String(v);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
