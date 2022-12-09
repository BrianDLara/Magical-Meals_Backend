const router = require('express').Router()
const controller = require('../controllers/CartController')

router.get('/cart_items', controller.GetCartsItems)
router.post(
  '/add_cart_item/cart_id/:cart_id/recipe_id/:recipe_id/item_id/:item_id',
  controller.AddCartItem
)
router.get('/cart_items/id/:id', controller.GetCartsItemsById)

module.exports = router
