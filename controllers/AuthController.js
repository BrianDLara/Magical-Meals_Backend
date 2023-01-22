const { User, Cart } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username,
        name: user.name
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { username, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      username,
      passwordDigest,
      name
    })
    // const createCart = await Cart.create(req.body)
    res.send(user)
    // res.send(createCart)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

// Kroger Oauth2

const callbackHandler = async (req, res, next) => {
  try {
    let params = url.parse(req.url, true).query

    if (!params.code) {
      res.sendStatus(400)
      return
    }

    let token = await middleware.getByAuth(params.code)

    res.cookie('accToken', token.access_token)
    res.cookie('refToken', token.refresh_token)
    // Redirect user back to browser page (index.html)
    res.redirect('/')
  } catch (error) {
    console.log(`error: ${error}`)
    res.sendStatus(500)
  }
}

const refreshHandler = async (req, res, next) => {
  if (!req.body.refreshToken) {
    res.sendStatus(400)
    return
  }

  try {
    const token = await middleware.getByRefresh(req.body.refreshToken)
    const result = {
      refreshToken: token.refresh_token,
      access_token: token.access_token
    }
  } catch (error) {
    console.log(`error: ${error}`)
    res.sendStatus(500)
  }
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession,
  callbackHandler,
  refreshHandler
}
