const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
  let passwordMatch = await bcrypt.compare(password, storedPassword)
  return passwordMatch
}

const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET)
  return token
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals
  let payload = jwt.verify(token, APP_SECRET)
  if (payload) {
    res.locals.payload = payload
    return next()
  }
  res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
}

const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

// kroger oAuth2

// Parameters imported from .env environment variables
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const redirectUrl = process.env.REDIRECT_URL

// Get token by authorization code (getByAuth)
async function getByAuth(code) {
  const body = `grant_type=authorization_code&code=${encodeURIComponent(
    code
  )}&redirect_uri=${encodeURIComponent(redirectUrl)}`
  return await get(body)
}
// Get token using refresh token
async function getByRefresh(refreshToken) {
  const body =
    `grant_type=refresh_token&` +
    `refresh_token=${encodeURIComponent(refreshToken)}`
  return await get(body)
}

async function get(body) {
  // ClientId and ClientSecret (stored in .env file)
  const encoded = buffer.Buffer.from(`${clientId}:${clientSecret}`, `ascii`)
  // ClientId and clientSecret must be encoded
  const authorization = 'Basic ' + encoded.toString('base64')
  // Base URL (https://api.kroger.com/v1/connect/oauth2)
  // Version/Endpoint (/v1/token)
  const tokenUrl = `${process.env.OAUTH2_BASE_URL}/token`

  // token request
  let tokenResponse = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'User-Agent': '',
      Authorization: authorization,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
  })
  // Handle response
  if (tokenResponse.status >= 400) {
    console.log(`tokenResponse error: ${tokenResponse.status}`)
    throw new Error(`tokenResponse failed with status ${tokenResponse.status}`)
  }
  // Return json object
  return await tokenResponse.json()
}

module.exports = {
  hashPassword,
  comparePassword,
  createToken,
  verifyToken,
  stripToken,
  getByAuth,
  getByRefresh
}
