const todoRouter = require("express").Router();

todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getTodo);

// getTodo => Va chercher getTodo
// getTodo() => Exécute getTodo
// () => exécute

module.exports = todoRouter;
