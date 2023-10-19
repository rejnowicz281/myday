const { Schema, models, model } = require("mongoose");
const Task = require("./task");

const listSchema = new Schema(
    {
        name: {
            type: String,
            default: "Untitled List",
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        tasks: [Task.schema],
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

const List = models.List || model("List", listSchema);

module.exports = List;
