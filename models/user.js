const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
}

//User.init(
  //  {
   //     id: {
     //       type: DataTypes.INTEGER,
     //       allowNull: false,
    //        primaryKey: true,
     //       autoIncrement: true,
     //   },   