const { getAllTodos, addTodo, removeTodo } = require("../controllers/todoController");

const todoRouter = require("express").Router();

todoRouter.get("/", getAllTodos);

// getTodo => Va chercher getTodo
// getTodo() => Exécute getTodo
// () => exécute

todoRouter.post("/add", addTodo);

todoRouter.delete("/delete/:id", removeTodo);

module.exports = todoRouter;
