'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Recipe - Cart association
      Recipe.belongsToMany(models.Cart, {
        as: 'recipe_ingredients',
        through: models.Item,
        foreignKey: 'recipeId'
      })

      // Recipe - User association
      Recipe.belongsToMany(models.User, {
        as: 'user_list',
        through: models.Favorite,
        foreignKey: 'recipeId'
      })
    }
  }
  Recipe.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      directions: DataTypes.ARRAY(DataTypes.TEXT),
      image: DataTypes.STRING,
      prep: DataTypes.STRING,
      cook: DataTypes.STRING,
      yield: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes'
    }
  )
  return Recipe
}
