const mongoose = require('mongoose');

//set the task structure
const TaskModelShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide a name'],
    trim: true,
    maxlength: [40, 'name cannot be more than 40 characters']
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Task', TaskModelShema);
