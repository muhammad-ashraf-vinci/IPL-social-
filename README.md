# IPL Social - Validateur d'Email

## Informations 

Nom : Muhammad Ashraf  
Email : muhammad.ashraf@student.vinci.be

## URL du projet GitHub

https://github.com/muhammad-ashraf-vinci/IPL-social-

## Description du code

Ce projet implémente un validateur d'adresse email en TypeScript utilisant la méthodologie TDD.

La fonction isValidEmail() prend une chaîne de caractères en paramètre et retourne un booléen.

## Algorithme de validation

1. Vérification que l'email n'est pas vide
2. Parcours de chaque caractère pour détecter les espaces
3. Recherche et comptage du symbole @
4. Mémorisation de la position du @ pour identifier la partie locale et le domaine
5. Vérification qu'il y a du texte avant le @
6. Vérification qu'il y a du texte après le @
7. Parcours du domaine pour compter les points
8. Vérification que le dernier caractère n'est pas un point

L'implémentation n'utilise aucune fonction préconçue TypeScript. Toute la logique est construite manuellement avec des boucles for et des comparaisons de caractères.

## Commande pour lancer les tests
```
npm install
npm test
```
