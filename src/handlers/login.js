const auth = require('../utils/auth');

const login = async (req, h) => {
  const { username, password } = req.payload;

  try {
    const token = await auth.authenticate(username, password)
    return h.response({ data: { token } }).code(200);
  } catch (e) {
    return h.response({ errors: 'Invalid Username or Password' }).code(404);
  }
}

module.exports = {
  login,
}