const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please enter the name of the task"],
  },
  date: {
    type: String,
    required: [true,"Please enter the date of the task"],
  },
  day: {
    type: String,
    required: [true,"Please enter the day of the task"],
  },
  time: {
    type: String,
    required: [true,"Please enter the time of the task"],
  },
},{
    timestamps:true
})

module.exports = mongoose.model("Todo", todoSchema);
