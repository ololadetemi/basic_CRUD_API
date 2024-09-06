const mongoose = require('mongoose');

const testSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter student name"]
        },
        class: {
            type: String,
            required: true,
            default: 0
        },
        Score: {
            type: Number,
            required: true,
            default: 0,
        }

    },
    {
        timestamps: true
    }
)

const Test = mongoose.model('Test', testSchema);

module.exports = Test;