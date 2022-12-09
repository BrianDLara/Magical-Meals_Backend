const { Cart, Item } = require('../models')

const GetCartsItems = async (req, res) => {
  try {
    const carts = await Cart.findAll({
      include: [{ model: Item, as: 'cart_items' }]
    })
    res.send(carts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCartsItemsById = async (req, res) => {
  try {
    const carts = await Cart.findByPk(req.params.id, {
      include: [{ model: Item, as: 'cart_items' }]
    })
    res.send(carts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const AddCartItem = async (req, res) => {
  try {
    const cart_items = await Item.findByPk(req.params.item_id)
    const cartId = parseInt(req.params.cart_id)
    const recipeId = parseInt(req.params.recipe_id)

    let itemBody = {
      name: cart_items.name,
      price: cart_items.price,
      image: cart_items.image,
      upc: cart_items.upc,
      cartId,
      recipeId
    }
    const addItemToCart = await Item.create(itemBody)
    res.send(addItemToCart)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetCartsItems,
  GetCartsItemsById,
  AddCartItem
}
