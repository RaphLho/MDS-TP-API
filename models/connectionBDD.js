require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectOptions: {
        encrypt: true,
        trustServerCertificate: true
    }
});

console.log('DB Config:', {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
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
