const express = require('express');
const api = require('./routes/api');
const sequelize = require('./models/connectionBDD');
const usersRoutes = require('./routes/users');

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', api);
app.use('/users', usersRoutes);

sequelize.sync().then(() => {
    console.log('✅ Base de données synchronisée');
    app.listen(port, () => {
        console.log(`Serveur en écoute sur http://localhost:${port}`);
    });
}).catch(err => {
    console.error('❌ Erreur lors de la synchronisation de la base de données :', err);
});