const Todo = require("../models/todoModel");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.send(allTodos);
  } catch (error) {
    console.error(error.message);
  }
};

const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.send(newTodo);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllTodos, addTodo };
