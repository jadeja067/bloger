const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  unm: {
    type: String,
    require: true,
    unique: true
  },  
  email: {
    type: String,
    require: true,
  }, 
  password: {
    type: String,
    require: true,
  }
});
exports.Users = mongoose.model("Users", UserSchema);
