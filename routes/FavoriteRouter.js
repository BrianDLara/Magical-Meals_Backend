const router = require('express').Router()
const controller = require('../controllers/FavoriteController')

router.get('/users_favorites', controller.GetUsersFavorites)
router.get('/recipe_users', controller.GetRecipesWithUserList)
router.post('/create', controller.CreateFavorite)
router.put('/update/:userId/:recipeId', controller.UpdateFavorite)

module.exports = router
