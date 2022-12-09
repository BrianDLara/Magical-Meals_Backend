const { Recipe, Item, Cart } = require('../models')

const CreateItem = async (req, res) => {
  try {
    const item = await Item.create(req.body)
    res.send(item)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateItem = async (req, res) => {
  try {
    const updateItem = await Item.update(
      { ...req.body },
      {
        where: {
          cartId: req.params.cartId,
          recipeId: req.params.recipeId
        },
        returning: true
      }
    )
    res.send(updateItem)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCartsItems = async (req, res) => {
  try {
    const carts = await Cart.findAll({
      include: [{ model: Recipe, as: 'shopping_list' }],
      raw: true
    })
    res.send(carts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetRecipeWithAllCarts = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: [
        { model: Cart, as: 'recipe_cart', through: { attributes: [] } }
      ],
      raw: true
    })
    res.send(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateItem,
  UpdateItem,
  GetCartsItems,
  GetRecipeWithAllCarts
}
