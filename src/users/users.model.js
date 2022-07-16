const mongoose = require('mongoose')
const { Schema } = mongoose

const UsersSchema = new Schema ({
  name: {type: String},
  email: {type: String},
  picture: {type: String},
  password: {type: String},
})

module.exports = mongoose.model('users', UsersSchema);