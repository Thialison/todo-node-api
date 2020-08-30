const todo = require('./todo_routes');
const user = require('./user_routes');
const auth = require('./login_routes');

module.exports = [
  ...todo,
  ...user,
  ...auth
]
