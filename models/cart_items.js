const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const cart_items = sequelize.define('cart_items', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gpu_model_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'cart_items',
    schema: 'b2c',
    timestamps: false
});

module.exports = cart_items;
