# Utiliser une image Node.js officielle
FROM node:22

# Définir le répertoire de travail
WORKDIR /root/MDS-TP-API

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port
EXPOSE 3001

# Commande pour démarrer l'application
CMD ["node", "index.js"]
