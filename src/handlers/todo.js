const TodoModel = require('../models/todo');

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

const getOne = async (req, h) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    return h.response({ data: response(todo) }).code(200);
  } catch (error) {
    return h.response({ erros: notFound(req.params) }).code(404);
  }
}

const getAll = async (req, h) => {
  const todos = await TodoModel.find({});
  return h.response({ data: todos.map(response) }).code(200);
}

const save = async (req, h) => {
  const { title, description, status, end_date } = req.payload;
  const todo = new TodoModel;

  todo.title = title;
  todo.description = description;
  status !== undefined ? todo.status = status : null;
  end_date !== undefined ? todo.end_date = end_date : null;
  await todo.save();
  return h.response({ data: response(todo) }).code(201)
}

const remove = async (req, h) => {
  const params = req.params;
  try {
    await TodoModel.findOneAndDelete({ _id: params.id });
    return h.response().code(204);
  } catch (error) {
    return h.response({ errors: notFound(params) }).code(404);
  }
}

module.exports = {
  getAll,
  save,
  getOne,
  remove
}