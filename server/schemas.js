const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: String,
  email: String,
  department: String,
  city: String
});

module.exports = model("User", UserSchema);


