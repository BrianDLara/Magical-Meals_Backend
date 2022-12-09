const router = require('express').Router()
const UserRouter = require('./UserRouter')
const RecipeRouter = require('./RecipeRouter')
const FavoriteRouter = require('./FavoriteRouter')

router.use('/users', UserRouter)
router.use('/recipes', RecipeRouter)
router.use('/favorites', FavoriteRouter)

module.exports = router
