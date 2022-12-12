const { Recipe, Favorite, User } = require('../models')

// const CreateFavorite = async (req, res) => {
//   try {
//     const favorite = await Favorite.create(req.body)
//     res.send(favorite)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

const CreateFavorite = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const recipeId = parseInt(req.params.recipe_id)

    let itemBody = {
      userId,
      recipeId
    }
    const addToFavorite = await Favorite.create(itemBody)
    res.send(addToFavorite)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateFavorite = async (req, res) => {
  try {
    const updateFavorite = await Favorite.update(
      { ...req.body },
      {
        where: {
          userId: req.params.userId,
          recipeId: req.params.recipeId
        },
        returning: true
      }
    )
    res.send(updateFavorite)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteFavorite = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.recipe_id)
    let userId = parseInt(req.params.user_id)
    await Favorite.destroy({ where: { recipeId: recipeId, userId: userId } })
    res.send({ message: `Deleted favorite recipe with and id of ${recipeId}` })
  } catch (error) {
    throw error
  }
}

const GetallFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll()
    res.send(favorites)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUsersFavorites = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Recipe, as: 'user_favorites' }]
    })
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUsersFavoritesById = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.id, {
      include: [{ model: Recipe, as: 'user_favorites' }]
    })
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetRecipesWithUserList = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: [{ model: User, as: 'user_list' }]
    })
    res.send(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateFavorite,
  UpdateFavorite,
  GetallFavorites,
  GetUsersFavorites,
  GetUsersFavoritesById,
  GetRecipesWithUserList,
  DeleteFavorite
}
