const userRepository = require('../repositories/user');

const sucessResponse = user => ({
  type: 'users',
  id: user.id,
  atributtes: {
    username: user.username
  },
  links: {
    self: `/api/v1/users/${user.id}`,
  }
});

const notFoundResponse = (id) => ({
  type: 'users',
  id,
  status: 'NOT FOUND',
  code: '404'
})

const save = async (req, h) => {
  try {
    const user = await userRepository.save(req.payload);
    return h.response({ data: sucessResponse(user) }).code(201);
  } catch (e) {
    return h.response({ data: e.message }).code(404);
  }
}

const getAll = async (req, h) => {
  const users = await userRepository.getAll();
  return h.response({ data: users.map(sucessResponse) }).code(200);
}

const find = async (req, h) => {
  const id = req.params.id;
  try {
    const user = await userRepository.find(id);
    return h.response({ data: sucessResponse(user) }).code(200)
  } catch (e) {
    return h.response({ data: notFoundResponse(id) }).code(404)
  }
}

const remove = async (req, h) => {
  const id = req.params.id;
  try {
    await userRepository.remove(id);
    return h.response().code(204);
  } catch (e) {
    return h.response({ errors: notFoundResponse(id) }).code(404);
  }
}

module.exports = {
  save,
  getAll,
  find,
  remove
}