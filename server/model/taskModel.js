const mongoose = require('mongoose')

const { Schema } = mongoose

const taskSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Please provide a title for your task.'],
	},
	day: {
		type: Number,
		required: [true, 'Please provide a day for your task.'],
		min: 0,
		max: 30,
		default : 1
	},
})

const Task = mongoose.model('Task' , taskSchema)

module.exports = Task;