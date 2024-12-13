# WebSocket et Socket.IO

WebSocket est un protocole de communication bidirectionnelle qui permet une communication en temps réel entre un client et un serveur. Socket.IO est une bibliothèque qui facilite l'utilisation des WebSockets avec des fonctionnalités additionnelles.

## WebSocket

### Caractéristiques principales

1. **Communication bidirectionnelle**
   - Connection persistante entre client et serveur
   - Échange de données en temps réel
   - Pas besoin de requêtes répétées

2. **Efficacité**
   - Overhead minimal après la connexion initiale
   - Latence réduite
   - Économie de bande passante

3. **Protocole dédié**
   - Utilise ws:// ou wss:// (sécurisé)
   - Handshake initial via HTTP
   - Passage à WebSocket après upgrade

## Socket.IO

### Avantages

1. **Fallback automatique**
   - WebSocket si disponible
   - Long polling en fallback
   - Reconnexion automatique

2. **Fonctionnalités avancées**
   - Rooms et namespaces
   - Broadcast
   - Event handling
   - Détection de déconnexion