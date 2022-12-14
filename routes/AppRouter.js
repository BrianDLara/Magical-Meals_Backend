const router = require('express').Router()
const UserRouter = require('./UserRouter')
const RecipeRouter = require('./RecipeRouter')
const FavoriteRouter = require('./FavoriteRouter')
const ItemRouter = require('./ItemRouter')
const CartRouter = require('./CartRouter')
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')

router.use('/users', UserRouter)
router.use('/recipes', RecipeRouter)
router.use('/favorites', FavoriteRouter)
router.use('/items', ItemRouter)
router.use('/carts', CartRouter)
router.use('/comments', CommentRouter)
router.use('/auth', AuthRouter)

module.exports = router
