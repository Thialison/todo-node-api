const userModel = require('../models/user');

const save = async (payload) => {
  const { username, password } = payload;

  const userExists = await findByUserName(username);

  if (userExists) {
    throw new Error('Email já cadastrado');
  }

  const user = new userModel;

  user.username = username;
  user.password = password;
  await user.save();

  user.password = undefined;
  return user;
}

const getAll = async () => await userModel.find({});

const find = async (id) => {
  const user = await userModel.findById(id).populate("todos");
  return user;
}

const remove = async id => await userModel.findOneAndDelete({ _id: id });

const findByUserName = username => (
  userModel.findOne({ username })
);

module.exports = {
  save,
  getAll,
  find,
  remove,
  findByUserName
}