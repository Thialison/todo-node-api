const userModel = require('../models/user');

const save = async (payload) => {
  const { username, password } = payload;

  const userExists = await userModel.findOne({ username });
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

const find = async id => await userModel.findById(id);

const remove = async id => await userModel.findOneAndDelete({ _id: id });

module.exports = {
  save,
  getAll,
  find,
  remove
}