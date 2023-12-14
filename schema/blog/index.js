const mongoose = require("mongoose");
const { Schema } = mongoose;

// const BlogSchema = new Schema({
//   title: {
//     type: String,
//     require: true
//   },
//   description: {
//     type: String,
//     require: true
//   },
//   uid: {
//     type: String,
//     require: true
//   }
// });
const BlogSchema = new Schema({
  title: String,
  description: String,
  uid: String
});

exports.blogschema = mongoose.model("Blogs", BlogSchema);
