const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const delivery = sequelize.define('delivery', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    delivery_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    assigned_to: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    estimated_delivery_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    actual_delivery_date: {
        type: DataTypes.DATE,
        allowNull: true
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
    tableName: 'delivery',
    schema: 'common',
    timestamps: false
});

module.exports = delivery;
