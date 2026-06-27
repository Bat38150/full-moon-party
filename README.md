# Full Moon Party — Todo collaborative Google Sheets + GitHub Pages

Mini site statique pour organiser la soirée, avec une todo list partagée via Google Sheets.

## Contenu

- `index.html` : page du site
- `style.css` : thème inspiré de ton affiche Full Moon Party
- `script.js` : logique de l’application
- `apps-script.gs` : API Google Apps Script à coller côté Google Sheets
- `affiche.jpg` : affiche utilisée dans l’en-tête

## Étape 1 — Créer le Google Sheet

1. Va sur Google Drive.
2. Crée un Google Sheets nommé par exemple `Full Moon Party - Todo`.
3. Ouvre le menu `Extensions` → `Apps Script`.
4. Supprime le code présent.
5. Colle tout le contenu du fichier `apps-script.gs`.
6. Clique sur `Enregistrer`.
7. Lance la fonction `setup` une première fois et accepte les autorisations.

## Étape 2 — Déployer l’API

1. Dans Apps Script : `Déployer` → `Nouveau déploiement`.
2. Type : `Application Web`.
3. Exécuter en tant que : `Moi`.
4. Qui a accès : `Tout le monde` ou `Toute personne disposant du lien`.
5. Clique sur `Déployer`.
6. Copie l’URL qui finit par `/exec`.

## Étape 3 — Relier le site au Google Sheet

1. Ouvre `script.js`.
2. Remplace :

```js
const GOOGLE_SCRIPT_URL = "";
```

par :

```js
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/TON_URL/exec";
```

## Étape 4 — Héberger sur GitHub Pages

1. Crée un dépôt GitHub, par exemple `full-moon-party-todo`.
2. Envoie les fichiers : `index.html`, `style.css`, `script.js`, `affiche.jpg`.
3. Va dans `Settings` → `Pages`.
4. Source : `Deploy from a branch`.
5. Branch : `main` / dossier `/root`.
6. L’adresse du site sera du type :

```txt
https://ton-compte.github.io/full-moon-party-todo/
```

## Notes importantes

- Le site est collaboratif car les tâches sont lues/écrites dans Google Sheets.
- Toute personne ayant l’adresse du site pourra modifier les tâches si l’URL Apps Script est publique.
- Si tu veux limiter les modifications, partage le lien uniquement aux personnes de confiance.
- Si la synchronisation met quelques secondes, c’est normal : Google Apps Script peut avoir un léger délai.
