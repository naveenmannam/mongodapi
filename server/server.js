require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
// mongoose.connect(process.env.DB_URI);
console.log(process.env.DB_URI)

const Todo = mongoose.model('Todo', {
  text:       {type: String},
  completed:  {type: Boolean, default: false},
  completeAt: {type: Number}
});

const newTodo = new Todo({
  text: 'Get some Avacadoes',
  completed: false,
  compleedAt: 4
})

newTodo.save()
  .then(
    doc => console.log('Document save success', doc),
    err => console.log('Document save failed.')
  )
  .catch(err => console.log('Error'))

