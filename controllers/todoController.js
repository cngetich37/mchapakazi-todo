const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");
// @desc Get All Todos
// @route GET /api/todos
// @access public

const getTodos = asyncHandler(async (req, res) => {
  const get_all_todos = await Todo.find();
  if (get_all_todos.length == 0) {
    res.status(404);
    throw new Error("Todo Not Found!, Kindly Add One");
  }
  res.status(200).json(get_all_todos);
});

// @desc Create Todos
// @route  POST /api/todos/
// @access public

const createTodo = asyncHandler(async (req, res) => {
  const { name, date, day, time } = req.body;
  console.log("The request is:", req.body);
  if (!name || !date || !day || !time) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const create_todo = await Todo.create({
    name,
    date,
    day,
    time,
  });
  res.status(201).json(create_todo);
});

// @desc Get a Todo
// @route GET /api/todos/:id
// @access public

const getTodo = asyncHandler(async (req, res) => {
  const get_a_todo = await Todo.findById(req.params.id);
  if (!get_a_todo) {
    res.status(404);
    throw new Error("Todo Not Found!");
  }
  res.status(200).json(get_a_todo);
});

// @desc Update a Todo
// @route PUT /api/todos/:id
// @access public

const updateTodo = asyncHandler(async (req, res) => {
  const update_my_todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!update_my_todo) {
    res.status(404);
    throw new Error("Todo Not Found!");
  }
  res.status(200).json(update_my_todo);
});

// @desc Delete  a Todo
// @route DELETE /api/todos/:id
// @access public

const deleteTodo = asyncHandler(async (req, res) => {
  const delete_my_todo = await Todo.findById(req.params.id);
  if (!delete_my_todo) {
    res.status(404);
    throw new Error("No todo found!");
  }
  await Todo.deleteOne();
  res.status(200).json(delete_my_todo);
});

module.exports = { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
