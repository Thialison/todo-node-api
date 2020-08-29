const todo = require('./todo_routes');
const user = require('./user_routes')

module.exports = [
  ...todo,
  ...user
]
