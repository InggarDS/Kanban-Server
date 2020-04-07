'use strict';

const { hash } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  
  const { Model } = sequelize.Sequelize

  class User extends Model {}

  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail : {
          args : true,
          msg : 'Email format required'
        },
        notEmpty : {
          args : true,
          msg : 'Email required'
        },
        checkEmail(val){
          return User.findOne({
            where : {
              email : val
            }
          })
          .then(result => {
            if ( result ){
              throw new Error('Email already in Use !')
            }
          })
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          args : true,
          msg : 'password required'
        }
      }
    }
  }, {
    sequelize,
    hooks : {
      beforeCreate : (user, option) => {
        user.password = hash(user.password)
      }
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Task)
    User.hasMany(models.Category)
  };
  return User;
};