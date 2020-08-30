const bcrypt = require('bcryptjs');

const make = value => (
  bcrypt.hash(value, 10)
)

const compare = (value, valueHashed) => (
  bcrypt.compare(value, valueHashed)
)

module.exports = {
  make,
  compare,
}