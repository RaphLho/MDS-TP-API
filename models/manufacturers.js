const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const manufacturers = sequelize.define('manufacturers', {
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
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'manufacturers',
  schema: 'common',
  timestamps: false
});

module.exports = manufacturers;
