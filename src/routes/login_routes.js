const loginHandler = require('../handlers/login');
const userRequest = require('../requests/user');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/auth',
    handler: loginHandler.login,
    options: {
      validate: userRequest
    }
  }
]