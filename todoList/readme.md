# Application Web PHP TODO List

Application de liste de tâches simple et intuitive, développée avec **HTML, CSS, JavaScript, PHP et MySQL**.  
Elle permet l’inscription et la suppression d’utilisateurs, ainsi que l’ajout, la suppression et la mise à jour de tâches.

---

## Fonctionnalités

- Inscription et suppression d’utilisateurs  
- Ajout de tâches  
- Marquer une tâche comme terminée  
- Supprimer une tâche  

---

## Technologies utilisées

- Front-end : HTML, CSS, JavaScript  
- Back-end : PHP, MySQL  

---

## Instructions d’installation

Pour configurer le projet en local, suivez ces étapes :

1.Cloner le dépôt  

```bash
   git clone --filter=blob:none --no-checkout https://github.com/Hiromi-k57/DWWM2025.git todolist
   cd todolist
   git sparse-checkout init --no-cone
   git sparse-checkout set "todoList/" "todoList/*"
   git checkout
   ```

2.Créer un fichier `.env` et y ajouter `DB_HOST, DB_USER, DB_PASSWORD, DB_NAME`.
Exemple :

```bash
   DB_HOST=test
   DB_USER=test
   DB_PASSWORD=test
   DB_NAME=to_do_list
```

3.Lancer Docker

```bash
   docker compose up -d --build
   ```

4.Personnalisation de l’environnement

- Le port est modifiable dans compose.yaml → ports (ex. "8080:80" → "9090:80").

- Le fuseau horaire est modifiable dans compose.yaml → mysql: environment - TZ (par défaut : Europe/Paris).

- La connexion à la base de données se fait via les variables du fichier `.env` (`DB_USER, DB_PASSWORD, DB_NAME, DB_HOST`).
  
5.Exécuter l’application

Importer le fichier `app/_database/to_do_list0905.sql` via phpMyAdmin pour créer la base `to_do_list`.

- Application : [http://localhost:8080/signup](http://localhost:8080/signup)
- phpMyAdmin : [http://localhost:8081/](http://localhost:8081/)
  (utiliser l’utilisateur et le mot de passe définis dans `.env`)

## Personnalisation

- Modifier les styles dans `signup.css`, `style.css` selon vos préférences.

## Améliorations futures

- Ajout d’une fonction d’édition des tâches
- Réinitialisation du mot de passe
  
## Améliorations prévues (sécurité et qualité)

- Actuellement la protection brute force passe par la session, la rendant faillible si on supprime les cookies, change de navigateur ou passe en navigation privée, il faudrait ajouter la protection brute force en base de donnée pour plus de sécurité.
  
## Licence

### Illustrations utilisées

- time.gif (Pixabay)
- check.jpg (Freep!k)
- 404fp.jpg (Freep!k)
- userF.jpg (Freep!k)

### Polices utilisées

- Acme-Regular.ttf
- arial.ttf
- BlakaHollow-Regular.ttf
- typewriter.ttf
  