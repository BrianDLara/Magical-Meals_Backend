'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User - Cart association
      User.hasOne(models.Cart, {
        as: 'user_cart',
        foreignKey: 'userId'
      })

      // User - Recipe association through Favorites
      User.belongsToMany(models.Recipe, {
        as: 'user_favorites',
        through: models.Favorite,
        foreignKey: 'userId'
      })

      // User - Recipe association through Comment
      User.belongsToMany(models.Recipe, {
        as: 'user_comments',
        through: models.Comment,
        foreignKey: 'userId'
      })
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      passwordDigest: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
