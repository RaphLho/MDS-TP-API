# Modèle de Maturité de Richardson

Le modèle de maturité de Richardson est un modèle qui permet d'évaluer le niveau de maturité d'une API REST. Il définit trois niveaux de maturité, chacun ajoutant des contraintes et des fonctionnalités supplémentaires.

## Niveau 0 : Le Marais des POX (Plain Old XML)

- Utilisation d'un seul point d'entrée (URI)
- Utilisation d'une seule méthode HTTP (généralement POST)
- Communication RPC-style
- Exemple : SOAP

## Niveau 1 : Ressources

- Introduction de la notion de ressources
- Chaque ressource a sa propre URI
- Toujours utilisation d'une seule méthode HTTP
- Exemple : `/users/1`, `/orders/123`

## Niveau 2 : Verbes HTTP

- Utilisation appropriée des méthodes HTTP
- GET pour lire
- POST pour créer
- PUT pour mettre à jour
- DELETE pour supprimer
- Utilisation des codes de statut HTTP appropriés

## Niveau 3 : Contrôles Hypermedia (HATEOAS)

- Hypermedia As The Engine Of Application State
- L'API fournit des liens vers les actions possibles
- Le client découvre dynamiquement les possibilités
- Auto-documentation de l'API
