const Joi = require('@hapi/joi');

module.exports = {
  payload: Joi.object({
    username: Joi.string().min(10).email().required(),
    password: Joi.string().min(6).required(),
    timestamps: Joi.any().forbidden()
  })
}