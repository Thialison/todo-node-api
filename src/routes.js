const todoHandler = require('./handlers/todo');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/todos',
    handler: todoHandler.save,
  },
  {
    method: 'GET',
    path: '/api/v1/todos',
    handler: todoHandler.getAll,
  },
  {
    method: 'GET',
    path: '/api/v1/todos/{id}',
    handler: todoHandler.find,
  },
  {
    method: 'DELETE',
    path: '/api/v1/todos/{id}',
    handler: todoHandler.remove,
    options: {
      cors: true
    }
  }
]
