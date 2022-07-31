'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({histories, books}) {
      this.hasMany(histories, {foreignKey: 'userId'})
      this.hasMany(books, {foreignKey: "userId"})
    }
  }
  users.init({
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};