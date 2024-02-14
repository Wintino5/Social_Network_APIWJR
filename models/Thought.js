const { model, Schema } = require('mongoose');

const userSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {

        },
        username: {
            type: String,
            required: true
        }
    }
);