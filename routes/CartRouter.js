const router = require('express').Router()
const controller = require('../controllers/CartController')

router.get('/cart_items', controller.GetCartsItems)
router.post(
  '/add_cart_item/cart_id/:cart_id/recipe_id/:recipe_id/item_id/:item_id',
  controller.AddCartItem
)
router.get('/cart_items/id/:id', controller.GetCartsItemsById)
router.post('/user_id/:user_id', controller.CreateCart)
router.delete('/item_id/:item_id', controller.DeleteItem)
router.delete('/cart_id/:cart_id', controller.DeleteCart)

module.exports = router
