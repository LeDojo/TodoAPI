const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const Todo = require("./models/todoModel");
const fakeDatas = require("./fakeDatas.json");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todo");
  console.log("Database connected");
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Importer JSON
async function loadData() {
  const existingTodos = await Todo.countDocuments();
  if (existingTodos === 0) {
    await Todo.create(fakeDatas);
    console.log("FakeDatas successfully imported");
  } else {
    console.log("Database already contains data. Skipping fakeData insertion.");
  }
}

loadData();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
