const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
}, {
  timestamps: {}
});

module.exports = mongoose.model('User', userSchema);