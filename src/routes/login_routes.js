const loginHandler = require('../handlers/login');
const { userSchema } = require('../requests/user');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/auth',
    handler: loginHandler.login,
    options: {
      validate: userSchema,
      auth: false
    }
  }
]