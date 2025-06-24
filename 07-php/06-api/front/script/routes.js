"use strict";

/**
 * Objet contenant la configuration des routes front-end.
 * Chaque clé est un chemin URI,
 * chaque valeur un objet avec :
 *  - html : chemin relatif vers le fichier HTML à charger,
 *  - js : (optionnel) script JS à importer dynamiquement pour cette route,
 *  - option : (optionnel) option passée au script (ex: méthode HTTP).
 */
export default {
    "/DWWM5/07-php/06-api/front/": {
        html: "user/list.html",
        js: "tableUser.js"
    },
    "/DWWM5/07-php/06-api/front/inscription": {
        html: "user/inscription.html",
        js: "form.js",
        option: "POST"
    },
    "/DWWM5/07-php/06-api/front/user/update": {
        html: "user/inscription.html",
        js: "form.js",
        option: "PUT"
    },
    "/DWWM5/07-php/06-api/front/user/delete": {
        html: "user/list.html",
        js: "delete.js"
    },
    "/DWWM5/07-php/06-api/front/connexion": {
        html: "auth/connexion.html",
        js: "auth.js",
        option: "POST"
    },
    "/DWWM5/07-php/06-api/front/deconnexion": {
        html: "auth/connexion.html",
        js: "auth.js"
    }
    // Exemple de route commentée
    // "/index.html": "pages/home.html"
};
