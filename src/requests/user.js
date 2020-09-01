const Joi = require('@hapi/joi');

const userSchema = {
  payload: Joi.object({
    username: Joi.string().min(10).email().required(),
    password: Joi.string().min(6).required(),
    timestamps: Joi.any().forbidden()
  })
}

module.exports = {
  userSchema,
}