const userHandler = require('../handlers/user')
const userRequest = require('../requests/user')

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/users',
    handler: userHandler.save,
    options: {
      validate: userRequest
    },
  },
  {
    method: 'GET',
    path: '/api/v1/users',
    handler: userHandler.getAll
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}',
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