'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.sequelize

  class Task extends Model { }

  Task.init({
    title: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize
  })

  Task.associate = function(models) {
    Task.belongsTo(models.User)
    Task.belongsTo(models.Category)
  };
  return Task;
};