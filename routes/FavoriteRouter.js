const router = require('express').Router()
const controller = require('../controllers/FavoriteController')

router.get('/get_all', controller.GetallFavorites)
router.get('/users_favorites', controller.GetUsersFavorites)
router.get('/users_favorites/id/:id', controller.GetUsersFavoritesById)
router.get('/recipe_users', controller.GetRecipesWithUserList)
router.post(
  '/create/user_id/:user_id/recipe_id/:recipe_id',
  controller.CreateFavorite
)
router.put('/update/:userId/:recipeId', controller.UpdateFavorite)
router.delete(
  '/user_id/:user_id/recipe_id/:recipe_id',
  controller.DeleteFavorite
)
module.exports = router
