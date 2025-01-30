const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const gpu_series = sequelize.define('gpu_series', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  manufacturer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release_year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'gpu_series',
  schema: 'common',
  timestamps: false
});

module.exports = gpu_series;
