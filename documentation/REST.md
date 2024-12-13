# REST (Representational State Transfer)

REST est un style d'architecture pour les systèmes distribués, particulièrement utilisé dans le développement d'API web. Il a été défini par Roy Fielding dans sa thèse de doctorat en 2000.

## Principes fondamentaux

1. **Architecture Client-Serveur**
   - Séparation claire entre le client et le serveur
   - Permet une meilleure évolutivité et portabilité

2. **Sans État (Stateless)**
   - Chaque requête contient toutes les informations nécessaires
   - Pas de session stockée côté serveur

3. **Mise en Cache**
   - Les réponses doivent indiquer si elles peuvent être mises en cache
   - Améliore les performances et la scalabilité

4. **Interface Uniforme**
   - Utilisation des méthodes HTTP standard (GET, POST, PUT, DELETE)
   - Ressources identifiées de manière unique via URLs
   - Manipulation des ressources via leurs représentations
   - Messages auto-descriptifs

5. **Système en Couches**
   - Le client ne sait pas s'il communique directement avec le serveur
   - Permet d'ajouter des intermédiaires (load balancers, caches)

## Méthodes HTTP principales

- **GET** : Récupérer une ressource
- **POST** : Créer une nouvelle ressource
- **PUT** : Mettre à jour une ressource existante
- **DELETE** : Supprimer une ressource
- **PATCH** : Modifier partiellement une ressource

## Codes de Statut HTTP

- **2xx** : Succès (200 OK, 201 Created, 204 No Content)
- **3xx** : Redirection
- **4xx** : Erreur client (400 Bad Request, 404 Not Found)
- **5xx** : Erreur serveur
