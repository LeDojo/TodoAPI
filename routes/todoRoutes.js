const { getAllTodos, addTodo } = require("../controllers/todoController");

const todoRouter = require("express").Router();

todoRouter.get("/", getAllTodos);

// getTodo => Va chercher getTodo
// getTodo() => Exécute getTodo
// () => exécute

todoRouter.post("/add", addTodo);

module.exports = todoRouter;
