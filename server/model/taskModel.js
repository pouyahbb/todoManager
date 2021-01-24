const mongoose = require('mongoose')

const { Schema } = mongoose

const TaskSchema = new Schema({
  title : {
    type : String,
    required : [true , 'Please Provide a title for task.']
  },
  day : {
    type : Number , 
    required : [true , 'Please provide a day for task.'],
    min : 0,
    max : 30
  }
})

const Task = mongoose.model('Task' , TaskSchema)

module.exports = Task