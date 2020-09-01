const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string(),
    status: Joi.string(),
    end_date: Joi.date().greater('now'),
    timestamps: Joi.any().forbidden()
  })
}