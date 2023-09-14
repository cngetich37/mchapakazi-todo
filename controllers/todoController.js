const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");
// @desc Get All Todos
// @route GET /api/todos
// @access public

const getTodos = asyncHandler(async (req, res) => {
  const get_all_todos = await Todo.find()
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
  const get_a_todo = await Todo.findOne(req.id);
  res.status(200).json(get_a_todo);
});

// @desc Update a Todo
// @route PUT /api/todos/:id
// @access public

const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update a todo with ${req.params.id}` });
});

// @desc Delete  a Todo
// @route DELETE /api/todos/:id
// @access public

const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete a todo with ${req.params.id}` });
});

module.exports = { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
