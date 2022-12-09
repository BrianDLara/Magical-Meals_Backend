const router = require('express').Router()
const UserRouter = require('./UserRouter')
const RecipeRouter = require('./RecipeRouter')
const FavoriteRouter = require('./FavoriteRouter')
const ItemRouter = require('./ItemRouter')

router.use('/users', UserRouter)
router.use('/recipes', RecipeRouter)
router.use('/favorites', FavoriteRouter)
router.use('/items', ItemRouter)

module.exports = router
