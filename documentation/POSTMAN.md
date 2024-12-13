# Postman - Guide des Bonnes Pratiques

Postman est un outil puissant pour tester et documenter les APIs. Ce guide couvre les bonnes pratiques pour organiser vos collections et automatiser l'authentification.

## Organisation des Collections

### Structure recommandée

1. **Grouper par fonctionnalité**
   - Créer des dossiers pour chaque domaine fonctionnel
   - Regrouper les requêtes liées ensemble
   - Utiliser une nomenclature cohérente

2. **Variables d'environnement**
   - Définir les URLs de base dans les variables
   - Créer différents environnements (dev, staging, prod)
   - Stocker les credentials de manière sécurisée

3. **Documentation**
   - Ajouter des descriptions détaillées aux collections
   - Documenter chaque requête
   - Inclure des exemples de réponses

## Automatisation de l'Authentification

### Bearer Token

1. **Configuration initiale**
   ```javascript
   // Dans l'onglet Pre-request Script de la collection
   pm.sendRequest({
       url: '{{base_url}}/auth/login',
       method: 'POST',
       header: {
           'Content-Type': 'application/json'
       },
       body: {
           mode: 'raw',
           raw: JSON.stringify({
               username: pm.variables.get('username'),
               password: pm.variables.get('password')
           })
       }
   }, function (err, res) {
       if (err) {
           console.error(err);
       } else {
           const token = res.json().token;
           pm.environment.set('bearer_token', token);
       }
   });
   ```

2. **Utilisation du token**
   - Dans les headers de la requête :
   ```
   Authorization: Bearer {{bearer_token}}
   ```

## Tests Automatisés

1. **Tests de base**
   ```javascript
   pm.test("Status code is 200", function () {
       pm.response.to.have.status(200);
   });

   pm.test("Response time is less than 200ms", function () {
       pm.expect(pm.response.responseTime).to.be.below(200);
   });
   ```

2. **Validation de schéma**
   ```javascript
   const schema = {
       "type": "object",
       "properties": {
           "id": { "type": "number" },
           "name": { "type": "string" }
       }
   };

   pm.test("Schema is valid", function () {
       pm.response.to.have.jsonSchema(schema);
   });
   ```

## Bonnes Pratiques Générales

1. **Versionnement**
   - Exporter régulièrement les collections
   - Utiliser un système de contrôle de version
   - Maintenir une documentation des changements

2. **Collaboration**
   - Partager les collections avec l'équipe
   - Utiliser des workspaces partagés
   - Maintenir des standards d'équipe

3. **Sécurité**
   - Ne jamais commiter de credentials
   - Utiliser des variables d'environnement pour les données sensibles
   - Régulièrement renouveler les tokens
