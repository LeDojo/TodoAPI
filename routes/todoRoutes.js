const todoRouter = require("express").Router();

todoRouter.get("/", (req, res) => {
  res.send("All todos");
});

// getTodo => Va chercher getTodo
// getTodo() => Exécute getTodo
// () => exécute

module.exports = todoRouter;
