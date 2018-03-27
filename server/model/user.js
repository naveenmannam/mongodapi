const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: true, minlength: 1},
  email:{type: String, required: true, trim: true, minlength: 1},
  age: {type: Number, default: 0}
})

const User = mongoose.model('user', UserSchema);

module.exports = User