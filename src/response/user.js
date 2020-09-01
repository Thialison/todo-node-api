const Joi = require('joi');

const userResponse = Joi.object({
  data: {
    token: Joi.string()
  }
})

module.exports = {
  userResponse,
}