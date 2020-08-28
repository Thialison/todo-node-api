const TodoModel = require('../models/todo');

const response = todo => ({
  type: 'todos',
  id: todo.id,
  atributtes: {
    title: todo.title,
    description: todo.description,
    status: todo.status,
  },
  links: {
    self: `/api/v1/todos/${todo.id}`,
  }
});

const getAll = async (req, h) => {
  const todos = await TodoModel.find({});
  return h.response({ data: todos.map(response) }).code(200);
}

const save = async (req, h) => {
  const { title, description, status, end_date } = req.payload;
  const todo = new TodoModel;

  todo.title = title;
  todo.description = description;
  todo.status = status;

  if (end_date !== undefined) {
    todo.end_date = end_date;
  }

  await todo.save();

  return h.response({ data: response(todo) }).code(201)

}

module.exports = {
  getAll,
  save,
}