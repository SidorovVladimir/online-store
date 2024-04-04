import sequelize from '..db.js/';
import { DataTypes } from 'sequelize';

const User = sequelize.define(
  'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  }
)