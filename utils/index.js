require('dotenv').config()

const USER_ID = process.env.USER_ID
const SCOPE = process.env.SCOPE

const validateHeaders = (headers) => {
  if (headers['user-id'] !== USER_ID || headers['scope'] !== SCOPE) {
    return {
      responseCode: 401,
      responseMessage: 'UNAUTHORIZED',
    }
  }

  return null
}

module.exports = validateHeaders
