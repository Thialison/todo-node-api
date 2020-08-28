const TodoModel = require('../models/todo');

const find = async id => await TodoModel.findById(id);

const getAll = async () => await TodoModel.find({});

const save = async (payload) => {
  const { title, description, status, end_date } = payload;
  const todo = new TodoModel;

  todo.title = title;
  todo.description = description;
  status !== undefined ? todo.status = status : null;
  end_date !== undefined ? todo.end_date = end_date : null;
  await todo.save();
  return todo;
}

const remove = async id => await TodoModel.findOneAndDelete({ _id: id });

module.exports = {
  getAll,
  save,
  find,
  remove
}
