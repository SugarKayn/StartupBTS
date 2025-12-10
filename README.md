#  Projet Vitrine : Aurora Games

## 1. Le Projet & Thème

**Aurora Games** est un site web vitrine pour un **studio de développement de jeux vidéo indépendant** fictif. 

Le thème choisi est **"Dark & Néon"**, reflétant l'identité visuelle du studio spécialisé dans les jeux narratifs et la science-fiction. Le design met l'accent sur l'immersion visuelle avec un mode sombre par défaut, des effets lumineux (glow) et de grandes images.




## 2. Fonctionnalités Principales

Le site est conçu comme une application moderne et responsive. Voici les points techniques clés :

* **Carrousel :** Un slider interactif codé en JavaScript qui présente les jeux avec l'image à gauche et la description à droite.
* **Responsive Design :** Le site s'adapte aux mobiles (menu empilé, carrousel vertical) et aux grands écrans.
* **Validation de Formulaire :** Vérification des entrées utilisateur (Regex pour l'email, longueur minimale pour le message) avec affichage dynamique des erreurs.
* **Header Réactif :** La barre de navigation reste fixe et lisible lors du défilement.



## 3. Organisation du Groupe

**Équipe :**
*  **Evgheni**
*  **Noé**

**Répartition du travail :**

| Fonctionnalité                 | Responsable |

| **Structure HTML & Sémantique** | Evgheni & Noé |
| **Design CSS (Flexbox/Grid/Colors)** | Evgheni |
| **JS : Logique du Carrousel** | Evgheni & Noé |
| **JS : Formulaire & LocalStorage** | Evgheni |
| **Responsive Design (Mobile)** | Evgheni & Noé |
| **Création des assets & Textes** | Evgheni & Noé |


## 4. Difficultés Rencontrées & Solutions

###  1. Le Carrousel sur Mobile
* **Problème :** Sur petit écran, le texte à côté de l'image écrasait tout le contenu (Split Layout).
* **Solution :** Utilisation d'une `@media query` pour passer la direction du flex en `column`. L'image passe au-dessus, le texte en dessous.

###  2. La Barre de Navigation
* **Problème :** Le header passait parfois sous le contenu lors du scroll, ou le texte était illisible sur les images claires.
* **Solution :** Ajout d'un `z-index: 1000` et d'un fond noir semi-transparent (`rgba(0,0,0,0.95)`).

###  3. Boucle du Carrousel
* **Problème :** Erreur JavaScript quand on cliquait sur "Suivant" à la dernière image.
* **Solution :** Ajout d'une condition : si l'index dépasse la taille du tableau, on le remet à 0 (boucle infinie).


## 5. Améliorations Possibles

Si nous avions plus de temps, nous pourrions ajouter :
1.  **Backend PHP :** Pour traiter réellement l'envoi des mails du formulaire.
2.  **Pages de Détails :** Une page dédiée pour chaque jeu (actuellement tout est sur l'accueil).
3.  **Mode Clair :** Un switch pour changer le thème (Dark/Light).
4.  **Bouton revenir en haut:** Un bouton en bas a droite de la page pour revenir tout en haut.


## 🛠 Comment lancer le projet ?

1.  Télécharger le dossier complet.
2.  Ouvrir le fichier `index.html` dans un navigateur web (Chrome, Firefox, Edge).
3.  Aucune installation (Node.js/PHP) n'est nécessaire.

Projet scolaire BTS SIO - 2025