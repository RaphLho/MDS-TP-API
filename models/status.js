const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const status = sequelize.define('status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'status',
    schema: 'common',
    timestamps: false
});

module.exports = status;
