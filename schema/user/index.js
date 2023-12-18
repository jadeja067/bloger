const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
<<<<<<< HEAD
    // unique: true,
=======
>>>>>>> 599cbd910d58c574ab223ff33a2ff9c90e636a7b
  },
  email: {
    type: String,
    required: true,
<<<<<<< HEAD
    
=======
>>>>>>> 599cbd910d58c574ab223ff33a2ff9c90e636a7b
  },
  password: {
    type: String,
    required: true,
  },
});
exports.Users = mongoose.model("Users", UserSchema);
