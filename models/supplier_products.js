const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const supplier_products = sequelize.define('supplier_products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gpu_model_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'supplier_products',
    schema: 'b2b',
    timestamps: false
});

module.exports = supplier_products;
