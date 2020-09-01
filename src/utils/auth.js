const { findByUserName, find } = require('../repositories/user');
const encrypt = require('../utils/encrypt');

const jwt = require('jsonwebtoken');

const generateToken = id => (
  jwt.sign(
    { user_id: id },
    process.env.SECRET_KEY,
    { expiresIn: '1h' }
  )
);

const verifyToken = token => (
  jwt.verify(
    token,
    process.env.SECRET_KEY
  )
);

const authStrategy = {
  key: process.env.SECRET_KEY,
  validate: async function (decoded, request, h) {
    const user = await find(decoded.user_id)
    if (!user) {
      throw new Error('invalid_user_token');
    }
    else {
      return { isValid: true };
    }
  }
};

const authenticate = async (username, password) => {
  const user = await findByUserName(username);
  if (!user) {
    throw new Error('invalid_username');
  }

  const validPassword = await encrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error('invalid_password');
  }

  const token = await generateToken(user.id)

  return token
}

module.exports = {
  authenticate,
  verifyToken,
  authStrategy,
}
