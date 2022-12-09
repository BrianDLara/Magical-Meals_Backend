const { Recipe, Favorite, User } = require('../models')

const CreateFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.create(req.body)
    res.send(favorite)
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
  GetUsersFavorites,
  GetRecipesWithUserList
}
