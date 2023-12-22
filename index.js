const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todo");
  console.log("Database connected");
}

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
