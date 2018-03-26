require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
// mongoose.connect(process.env.DB_URI);

// const Todo = mongoose.model('Todo', {
//   text:       {type: String, required: true, minlength: 1, trim: true},
//   completed:  {type: Boolean, default: false, required: true},
//   completeAt: {type: Number, default: null}
// });

// const newTodo = new Todo({
//   text: 'Get some Avacadoes',
//   completed: false,
//   compleedAt: 4
// })

// newTodo.save()
//   .then(
//     doc => console.log('Document save success', doc),
//     err => console.log('Document save failed.')
//   )
//   .catch(err => console.log('Error'))

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  age: {type: Number, default: 0}
})

const User = mongoose.model('User', UserSchema);

const newUser = new User({
  name: 'Minny Mannam',
  email: 'minny.mannam@gmail.com',
})

newUser.save()
  .then(
    data => console.log('Record Saved', data),
    err => console.log('Error saving record')
  )