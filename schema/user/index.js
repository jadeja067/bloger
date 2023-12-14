const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  unm: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        return /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(v)
      }
    }
  },
  password: {
    type: String,
    required: true,
  },
});
exports.Users = mongoose.model("Users", UserSchema);
