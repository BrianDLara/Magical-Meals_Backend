const { Recipe } = require('../models')

const GetRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll()
    res.send(recipes)
  } catch (error) {
    throw error
  }
}

const GetRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id)
    res.send(recipe)
  } catch (error) {
    throw error
  }
}

const CreateRecipe = async (req, res) => {
  try {
    const createdRecipe = await Recipe.create(req.body)
    res.send(createdRecipe)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateRecipe = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.recipe_id)
    let updatedRecipe = await Recipe.update(req.body, {
      where: { id: recipeId },
      returning: true
    })
    res.send(updatedRecipe)
  } catch (error) {
    throw error
  }
}

const DeleteRecipe = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.id)
    await Recipe.destroy({ where: { id: recipeId } })
    res.send({ message: `Deleted recipe with and id of ${recipeId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRecipes,
  GetRecipeById,
  CreateRecipe,
  UpdateRecipe,
  DeleteRecipe
}
