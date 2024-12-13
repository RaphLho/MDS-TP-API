# HTTP et HTTPS

## Protocole HTTP

HTTP (Hypertext Transfer Protocol) est un protocole de communication client-serveur permettant le transfert de données sur le web.

### Méthodes HTTP

1. **GET**
   - Récupère des données
   - Ne modifie pas les ressources
   - Idempotent
   - Cache-able

2. **POST**
   - Crée une nouvelle ressource
   - Modifie l'état du serveur
   - Non idempotent
   - Non cache-able

3. **PUT**
   - Met à jour une ressource existante
   - Remplace complètement la ressource
   - Idempotent
   - Non cache-able

4. **PATCH**
   - Met à jour partiellement une ressource
   - Modifie uniquement les champs spécifiés
   - Non idempotent
   - Non cache-able

5. **DELETE**
   - Supprime une ressource
   - Idempotent
   - Non cache-able

6. **HEAD**
   - Similaire à GET mais sans corps de réponse
   - Récupère uniquement les métadonnées
   - Idempotent
   - Cache-able

7. **OPTIONS**
   - Décrit les options de communication
   - Utilisé pour CORS
   - Idempotent
   - Non cache-able

### Codes de Statut HTTP

#### 1xx : Information
- 100 Continue
- 101 Switching Protocols
- 102 Processing

#### 2xx : Succès
- 200 OK
- 201 Created
- 202 Accepted
- 204 No Content
- 206 Partial Content

#### 3xx : Redirection
- 300 Multiple Choices
- 301 Moved Permanently
- 302 Found
- 303 See Other
- 304 Not Modified
- 307 Temporary Redirect
- 308 Permanent Redirect

#### 4xx : Erreur Client
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed
- 406 Not Acceptable
- 409 Conflict
- 413 Payload Too Large
- 414 URI Too Long
- 415 Unsupported Media Type
- 429 Too Many Requests

#### 5xx : Erreur Serveur
- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout
- 505 HTTP Version Not Supported

## HTTPS (HTTP Secure)

HTTPS est la version sécurisée du protocole HTTP, utilisant TLS/SSL pour le chiffrement.

### Caractéristiques

1. **Sécurité**
   - Chiffrement des données
   - Authentification du serveur
   - Intégrité des données
   - Protection contre les attaques man-in-the-middle

2. **Certificats**
   - SSL/TLS
   - Émis par une autorité de certification
   - Validation du domaine
   - Durée de validité limitée

3. **Avantages**
   - Confidentialité des données
   - SEO amélioré
   - Confiance des utilisateurs
   - Conformité aux normes de sécurité

### Bonnes Pratiques

1. **Configuration**
   - Redirection HTTP vers HTTPS
   - HSTS (HTTP Strict Transport Security)
   - Certificats à jour
   - Protocoles TLS récents

2. **Sécurité**
   - Désactivation des protocoles obsolètes
   - Configuration des ciphers
   - Protection contre les vulnérabilités connues
   - Monitoring régulier
