# JSON Web Token (JWT)

Un JWT est un standard ouvert (RFC 7519) qui permet de transmettre de manière sécurisée des informations entre différentes parties sous forme d'objet JSON.

## Structure

Un JWT est composé de trois parties séparées par des points (.) :

1. **Header** : Contient le type de token et l'algorithme de signature
2. **Payload** : Contient les données (claims)
3. **Signature** : Permet de vérifier que le message n'a pas été modifié
