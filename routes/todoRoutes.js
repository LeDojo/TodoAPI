const { getAllTodos, addTodo, removeTodo, updateTodo } = require("../controllers/todoController");

const todoRouter = require("express").Router();

todoRouter.get("/", getAllTodos);

// getTodo => Va chercher getTodo
// getTodo() => Exécute getTodo
// () => exécute

todoRouter.post("/add", addTodo);

todoRouter.delete("/delete/:id", removeTodo);

todoRouter.put("/update/:id", updateTodo);

module.exports = todoRouter;
