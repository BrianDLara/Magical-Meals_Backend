const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/register', controller.Register)
Router.post('/login', controller.Login)

Router.put(
  '/update_password/user_id/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = Router
