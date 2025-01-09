const express = require('express');
const api = require('./routes/api');
const sequelize = require('./models/connectionBDD');
const utilisateursRoutes = require('./routes/utilisateurs');

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', api);

sequelize.sync().then(() => {
    console.log('✅ Base de données synchronisée');
    app.listen(port, () => {
        console.log(`Serveur en écoute sur http://localhost:${port}`);
    });
}).catch(err => {
    console.error('❌ Erreur lors de la synchronisation de la base de données :', err);
});