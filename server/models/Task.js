// DB Schema
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema ({
    title: { type: String, required: true},
    dueDate: Date,
    status: { type: String, enum: ['todo', 'in progress', 'done'], default: 'todo'}
});

module.exports = mongoose.model('Task', taskSchema)  // eine Collection namens tasks wird erstellt