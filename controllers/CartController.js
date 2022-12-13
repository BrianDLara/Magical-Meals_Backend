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

    let itemBody = {
      name: cart_items.name,
      price: cart_items.price,
      image: cart_items.image,
      upc: cart_items.upc,
      amount: cart_items.amount,
      recipeId: null,
      cartId
    }
    const addItemToCart = await Item.create(itemBody)
    res.send(addItemToCart)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const CreateCart = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    let itemBody = {
      userId
    }
    const createdCart = await Cart.create(itemBody)
    res.send(createdCart)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteItem = async (req, res) => {
  try {
    const itemId = parseInt(req.params.item_id)
    await Item.destroy({ where: { id: itemId } })
    res.send({ message: `Deleted item with and id of ${itemId}` })
  } catch (error) {
    throw error
  }
}

const DeleteCart = async (req, res) => {
  try {
    const cartId = parseInt(req.params.cart_id)
    await Cart.destroy({ where: { id: cartId } })
    res.send({ message: `Deleted cart with and id of ${cartId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCartsItems,
  GetCartsItemsById,
  AddCartItem,
  CreateCart,
  DeleteItem,
  DeleteCart
}
