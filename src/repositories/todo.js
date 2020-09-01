const todoModel = require('../models/todo');
const userModel = require('../models/user');

const find = async (todo_id, user_id) => (
  await todoModel.findOne({ _id: todo_id, user: user_id })
);

const getAll = async user_id => await todoModel.find({ user: user_id })

const save = async (payload) => {
  const { title, description, status, end_date, user_id } = payload;
  const todo = new todoModel;

  todo.title = title;
  description !== undefined ? todo.description = description : null;
  status !== undefined ? todo.status = status : null;
  end_date !== undefined ? todo.end_date = end_date : null;
  todo.user = user_id;
  await todo.save();

  await userModel.updateOne({ _id: user_id }, { $push: { todos: todo.id } })

  return todo;
}

const remove = async id => await todoModel.findOneAndDelete({ _id: id });

module.exports = {
  getAll,
  save,
  find,
  remove
}
