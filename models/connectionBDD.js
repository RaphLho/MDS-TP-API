const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SQLserveurTP', 'API_BDD', 'fox', {
    host: 'localhost',
    dialect: 'mssql',
    port: 1433,
    dialectOptions: {
        encrypt: true,
        trustServerCertificate: true
    }
});

// Tester la connexion
sequelize.authenticate()
    .then(() => {
        console.log('✅ Connexion réussie à la base de données avec Sequelize');
    })
    .catch(err => {
        console.error('❌ Impossible de se connecter à la base de données :', err);
    });

module.exports = sequelize;
