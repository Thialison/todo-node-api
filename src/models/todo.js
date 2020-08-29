const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  description: { type: String, default: null },
  status: { type: String, default: 'Pending' },
  end_date: { type: Date, default: null },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: {}
});

module.exports = mongoose.model('Todo', TodoSchema);