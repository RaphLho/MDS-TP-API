const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const customer_carts = sequelize.define('customer_carts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    modified_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'customer_carts',
    schema: 'b2c',
    timestamps: false
});

module.exports = customer_carts;
