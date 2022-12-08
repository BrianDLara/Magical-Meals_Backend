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
      Recipe.belongsToMany(models.Carts, {
        as: 'recipe_ingredients',
        through: models.Favorite,
        foreignKey: 'recipeId'
      })
      Recipe.belongsTo(models.Favorite, { foreignKey: 'favoriteId' })
    }
  }
  Recipe.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      directions: DataTypes.STRING,
      image: DataTypes.STRING,
      prep: DataTypes.INTEGER,
      cook: DataTypes.INTEGER,
      yield: DataTypes.INTEGER,
      favoriteId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'favorites',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes'
    }
  )
  return Recipe
}
