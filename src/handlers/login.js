const { findByUserName } = require('../repositories/user');
const encrypt = require('../utils/encrypt');

const login = async (req, h) => {
  const user = await findByUserName(req.payload.username);
  if (!user) {
    return h.response({ errors: 'Username inválido!' }).code(404);
  }

  const samePassword = await encrypt.compare(req.payload.password, user.password);
  if (!samePassword) {
    return h.response({ errors: 'Senha inválida!' }).code(404);
  }

  return h.response({ data: 'Usuário Logado!' }).code(200);
}

module.exports = {
  login,
}