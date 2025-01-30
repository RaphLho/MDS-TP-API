const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const gpu_models = sequelize.define('gpu_models', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  series_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  memory_size: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  memory_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  core_clock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  boost_clock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tdp: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  length: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  width: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  height: {
    type: DataTypes.INTEGER,
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
  tableName: 'gpu_models',
  schema: 'common',
  timestamps: false
});

module.exports = gpu_models;
