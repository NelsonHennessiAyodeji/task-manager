const express = require('express');
const router = express.Router();
const {
    getAllTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask
} = require('../controller/taskController');

// router.route('/').get((req, res) => {
//     res.send("Router setup was successful");
// });

router.route('/')
.get(getAllTasks)
.post(createTask);

router.route('/:id')
.get(getTask)
.put(updateTask)
.delete(deleteTask);

module.exports = router;