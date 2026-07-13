/*
  admins.js
  ---------
  Liste des comptes autorisés à ouvrir admin.html.
  Ne contient JAMAIS de mot de passe en clair : seulement un sel aléatoire
  et le hash SHA-256 de "sel:motdepasse".

  Pour ajouter un admin :
  - Le plus simple : une fois connecté à admin.html, va dans l'onglet
    "Administrateurs" -> "Ajouter un admin". Le panneau committe
    automatiquement la nouvelle entrée ici, dans ce fichier, via l'API GitHub.
  - Ou manuellement : ouvre admin.html, clique sur "Générer un compte"
    (visible sur l'écran de connexion, sans avoir besoin d'être connecté),
    entre le pseudo + mot de passe souhaités, puis copie le bloc généré
    ci-dessous, dans le tableau ADMINS.

  Rappel sécurité : ce fichier vit dans un repo PUBLIC. Le hash empêche de
  lire les mots de passe en clair, mais n'importe qui peut voir les pseudos
  et pourrait tenter de deviner un mot de passe faible. Choisissez des mots
  de passe longs et uniques. Le vrai verrou de sécurité, c'est le token
  GitHub personnel que chaque admin doit fournir en plus du login (voir
  ADMIN-README.md).
*/

const ADMINS = [
  // Exemple (à supprimer / remplacer) :
  // { username: "eowea", salt: "3f7a1c9e2b6d4f80", hash: "d2a84f4b8b650937ec8f73cd8be2c74add5a911ba64df27458ed8229da804a26" }
];
