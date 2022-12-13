const router = require('express').Router()
const controller = require('../controllers/ItemController')
const middleware = require('../middleware')

router.get('/find_all', controller.GetAllItems)
router.get('/cart_items', controller.GetCartsItems)
router.get('/recipe_carts', controller.GetRecipeWithAllCarts)
router.post('/create', controller.CreateItem)
router.put(
  '/update/:item_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateItem
)

module.exports = router
