'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Cart - User association
      Cart.belongsTo(models.User, { foreignKey: 'userId' })

      // Cart - Recipe association
      Cart.belongsToMany(models.Recipe, {
        as: 'shopping_list',
        through: models.Ingredient,
        foreignKey: 'cartId'
      })
    }
  }
  Cart.init(
    {
      // ingredientId: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Cart',
      tableName: 'carts'
    }
  )
  return Cart
}
