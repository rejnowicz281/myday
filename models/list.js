const { Schema, models, model } = require("mongoose");

const listSchema = new Schema(
    {
        name: {
            type: String,
            default: "Untitled List",
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

const List = models.List || model("List", listSchema);

module.exports = List;
