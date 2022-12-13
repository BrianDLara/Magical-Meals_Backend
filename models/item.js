'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Cart, {
        foreignKey: 'cartId'
      })

      Item.belongsTo(models.Recipe, {
        foreignKey: 'recipeId'
      })
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      image: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      upc: DataTypes.STRING,
      cartId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'carts',
          key: 'id'
        }
      },
      recipeId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'recipes',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Item',
      tableName: 'items'
    }
  )
  return Item
}
