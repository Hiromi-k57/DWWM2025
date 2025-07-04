<?php 
// constante indiquant si nous somme en dévloppement ou en production
const APP_ENV = "dev";

require "./api.php"; // Logique et outils de l'API
require "./routes.php"; // déclaration des routes
require "./router.php"; // Gestion du routage


?>