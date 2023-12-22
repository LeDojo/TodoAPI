const { Schema, mongoose } = require("mongoose");

const todoSchema = new Schema({
  name: String,
  content: String,
  status: { type: String, default: "En cours" },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
