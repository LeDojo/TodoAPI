const { getAllTodos } = require("../controllers/todoController");

const todoRouter = require("express").Router();

todoRouter.get("/", getAllTodos);

// getTodo => Va chercher getTodo
// getTodo() => Exécute getTodo
// () => exécute

module.exports = todoRouter;
