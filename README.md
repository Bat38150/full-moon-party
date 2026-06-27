# Full Moon Party V2.1

## Changements
- La section Programme de la page invités est remplacée par un compte à rebours dynamique jusqu'au **11 juillet 2026 à 19h**.
- Correction du bouton **Entrer** dans l'espace organisation : le script est chargé avec `defer`, le bouton est en `type="button"`, et l'initialisation attend `DOMContentLoaded`.
- Compatibilité mobile conservée.

## Mot de passe organisation
```txt
fullmoon2026
```

## À publier sur GitHub
Remplace les fichiers :
```txt
index.html
organisation.html
style.css
invite.js
orga.js
affiche.jpg
README.md
```

## Apps Script
Remplace le code Apps Script par `apps-script-v2-1.gs`, lance `setup`, puis :
`Déployer > Gérer les déploiements > Modifier > Nouvelle version > Déployer`.

## Test
- Page invités : `/`
- Espace organisation : `/organisation.html`
- Code : `fullmoon2026`
