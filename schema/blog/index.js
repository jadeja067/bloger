const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  }
});

exports.blogschema = mongoose.model("Blogs", BlogSchema);
