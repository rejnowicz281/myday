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
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
            required: true,
        },
        priority: {
            type: Number,
            default: 0,
            min: 0,
            required: true,
        },
        repeat: {
            type: Number,
            default: 0,
            min: 0,
            required: true,
        },
        note: String,
        due_date: Date,
        list: {
            type: Schema.Types.ObjectId,
            ref: "List",
        },
        owner: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

const Task = models.Task || model("Task", taskSchema);

module.exports = Task;
