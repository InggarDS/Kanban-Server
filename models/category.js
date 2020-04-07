'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class Category extends Model {}

  Category.init({
    name: DataTypes.STRING

  }, {
    sequelize
  })

  Category.associate = function(models) {
   Category.hasMany(models.Task)
   Category.belongsTo(models.User)
  };
  return Category;
};