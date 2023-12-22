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

const removeTodo = async (req, res) => {
  try {
    const deleteTodo = await Todo.findOneAndDelete({_id: req.params.id});
    res.json({deleteTodo,message:`delete todo successfully`});
  } catch (error) {
    console.error(error.message);
  }
}

const updateTodo = async (req, res) => {
  try {
    const updateTodo = await Todo.findOneAndUpdate({_id: req.params.id}, req.body,{new: true});
    res.json({updateTodo,message:`update todo successfully`});
} catch (error) {
    console.error(error.message);
  }
}


module.exports = { getAllTodos, addTodo, removeTodo,updateTodo };
