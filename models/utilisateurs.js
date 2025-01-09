const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const utilisateurs = sequelize.define('utilisateurs', {
    id_utilisateur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    mot_de_passe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_inscription: {
        type: DataTypes.DATE,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'utilisateurs',
});

module.exports = utilisateurs;
