const todoRepository = require('../repositories/todo');

const response = todo => ({
  type: 'todos',
  id: todo.id,
  atributtes: {
    title: todo.title,
    description: todo.description,
    status: todo.status,
    end_date: todo.end_date,
  },
  links: {
    self: `/api/v1/todos/${todo.id}`,
  }
});

const notFound = (req) => ({
  type: 'todos',
  id: req.id,
  status: 'NOT FOUND',
  code: '404'
})

const find = async (req, h) => {
  try {
    const user_id = req.auth.credentials.user_id;
    const todo = await todoRepository.find(req.params.id, user_id);
    return h.response({ data: response(todo) }).code(200);
  } catch (error) {
    return h.response({ erros: notFound(req.params) }).code(404);
  }
}

const getAll = async (req, h) => {
  const user_id = req.auth.credentials.user_id;
  const todos = await todoRepository.getAll(user_id);
  return h.response({ data: todos.map(response) }).code(200);
}

const save = async (req, h) => {
  const user_id = req.auth.credentials.user_id;
  req.payload.user_id = user_id
  const todo = await todoRepository.save(req.payload)
  return h.response({ data: response(todo) }).code(201)
}

const remove = async (req, h) => {
  const params = req.params;
  try {
    await todoRepository.remove(params.id);
    return h.response().code(204);
  } catch (error) {
    return h.response({ errors: notFound(params) }).code(404);
  }
}

module.exports = {
  getAll,
  save,
  find,
  remove
}
