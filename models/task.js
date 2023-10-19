const { Schema, models, model } = require("mongoose");

const taskSchema = new Schema(
    {
        name: {
            type: String,
            default: "Untitled Task",
            required: true,
        },
        my_day: {
            type: Boolean,
            default: false,
        },
        due_date: Date,
        repeat: Number,
        priority: Number,
        note: String,
    },
    { timestamps: true }
);

const Task = models.Task || model("Task", taskSchema);

module.exports = Task;
