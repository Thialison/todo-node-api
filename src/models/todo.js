const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  description: { type: String, default: null },
  status: { type: String, default: 'Pending' },
  end_date: { type: Date, default: null },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: {}
});

module.exports = mongoose.model('Todo', todoSchema);