const { Recipe, Item, Cart } = require('../models')

const GetAllItems = async (req, res) => {
  try {
    const item = await Item.findAll()
    res.send(item)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

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
    let itemId = parseInt(req.params.item_id)
    let updateItem = await Item.update(req.body, {
      where: { id: itemId },
      returning: true
    })
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
  GetAllItems,
  CreateItem,
  UpdateItem,
  GetCartsItems,
  GetRecipeWithAllCarts
}
