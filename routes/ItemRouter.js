const router = require('express').Router()
const controller = require('../controllers/ItemController')

router.get('/cart_items', controller.GetCartsItems)
router.get('/recipe_carts', controller.GetRecipeWithAllCarts)
router.post('/create', controller.CreateItem)
router.put('/update/:userId/:recipeId', controller.UpdateItem)

module.exports = router
