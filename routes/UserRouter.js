const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

// Get all users
router.get('/get_all', controller.GetUsers)

// Get users with cart
router.get('/get_all_cart', controller.GetUsersCart)

// Get users with cart by id
router.get('/get_all_cart/id/:id', controller.GetUsersCartById)

// get user by id
router.get('/id/:id', controller.GetUserById)

//Create user
router.post('/new_user', controller.CreateUser)

// update user
router.put(
  '/id/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)

// delete user
router.delete(
  '/id/:id',
  //   middleware.stripToken,
  //   middleware.verifyToken,
  controller.DeleteUser
)

// login
router.post('/login', controller.LoginUser)

// register
router.post('/register', controller.RegisterUser)

// update password

// check session
router.get(
  '/session'
  //   middleware.stripToken,
  //   middleware.verifyToken,
  //   controller.CheckSession
)

module.exports = router
