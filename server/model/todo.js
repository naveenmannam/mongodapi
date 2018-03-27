const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
  text:{type: String, required: true, minlength: 1, trim: true},
  completed:{type: Boolean, default: false, required: true},
  completeAt:{type: Number, default: null}
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo