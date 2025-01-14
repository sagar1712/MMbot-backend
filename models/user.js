'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.bot, { foreignKey: 'userId' });
      user.hasMany(models.transaction, { foreignKey: 'userId' });
      user.hasOne(models.setting, { foreignKey: 'userId' });
    }
  }
  user.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    active: DataTypes.INTEGER,
    deleted: DataTypes.INTEGER,
    token: DataTypes.STRING,
    token_expire: DataTypes.STRING,
    birthday: DataTypes.DATE,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};