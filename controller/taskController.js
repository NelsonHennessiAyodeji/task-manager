const Task = require('../models/TaskModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../error_handler/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
  const allTasks = await Task.find({});
  res.status(200).json(allTasks);
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError('task with ID not found', 404));
  }
  res.status(200).send(task);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true
  });
  if (!task) {
    return next(createCustomError('task with ID not found', 404));
  }
  res.status(200).send(task);
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return next(createCustomError('task with ID not found', 404));
  }
  res.status(200).send(task);
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
