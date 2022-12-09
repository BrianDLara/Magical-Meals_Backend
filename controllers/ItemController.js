const { Item } = require('../models')
const { Cart } = require('../models')
const { Recipe } = require('../models')

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
      include: [{ model: Recipe, as: 'shopping_list' }]
    })
    res.send(carts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const GetRecipesWithUserList = async (req, res) => {
//   try {
//     const recipes = await Recipe.findAll({
//       include: [{ model: User, as: 'user_list' }]
//     })
//     res.send(recipes)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

module.exports = {
  CreateItem,
  UpdateItem,
  GetCartsItems
  //   GetRecipesWithUserList
}
