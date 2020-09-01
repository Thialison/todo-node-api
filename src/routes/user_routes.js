const userHandler = require('../handlers/user')
const { userSchema } = require('../requests/user');
const { userResponse } = require('../response/user');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/signup',
    handler: userHandler.signup,
    options: {
      tags: ['api'],
      validate: userSchema,
      auth: false,
      response: { schema: userResponse }
    },
  },
  {
    method: 'GET',
    path: '/api/v1/users',
    handler: userHandler.getAll,
    options: {
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/api/v1/me',
    handler: userHandler.find
  },
  {
    method: 'DELETE',
    path: '/api/v1/users/{id}',
    handler: userHandler.remove,
    options: {
      cors: true
    }
  }
]