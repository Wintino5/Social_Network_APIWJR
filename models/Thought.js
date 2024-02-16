const { model, Schema } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: [1, 'Thought must be more than 1 character'],
            maxLength: [280, 'Thought must be less than 280 characters']
        },
        createdAt: {
            type: Date,
            default: Date.now,

        },
        username: {
            type: String,
            required: true
        },
        reaction: [reactionSchema]
    }
);

module.exports = thoughtSchema;