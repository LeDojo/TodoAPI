const getAllTodos = async (req, res) => {
  await res.send("All todos");
};

module.exports = { getAllTodos };
