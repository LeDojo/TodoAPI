const { Schema, mongoose } = require("mongoose");

const todoSchema = new Schema({
  name: String,
  content: String,
  status: { type: String, enum: ["En cours", "Terminée"], default: "En cours" },
});

// Déclare à MongoDB la collection
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
