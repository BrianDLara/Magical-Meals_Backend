const router = require('express').Router()
const controller = require('../controllers/RecipeController')

// Get all Recipes
router.get('/get_all', controller.GetRecipes)

// get Recipe by id
router.get('/id/:id', controller.GetRecipeById)

//Create Recipe
router.post('/new_recipe', controller.CreateRecipe)

// update Recipe
router.put(
  '/id/:recipe_id',
  //   middleware.stripToken,
  //   middleware.verifyToken,
  controller.UpdateRecipe
)

// delete Recipe
router.delete(
  '/id/:id',
  //   middleware.stripToken,
  //   middleware.verifyToken,
  controller.DeleteRecipe
)

module.exports = router
