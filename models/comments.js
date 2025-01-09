const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const comments = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gpu_model_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'comments',
    schema: 'b2c',
    timestamps: false
});

module.exports = comments;
