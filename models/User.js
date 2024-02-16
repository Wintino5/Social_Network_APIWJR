const { model, Schema } = require('mongoose');

const userSchema = new Schema(
    {
       username: {
        type: String,
        required: [true, 'You must enter a password'],
        unique: true,
        minLength: [2, 'Your username must be at least 2 characters in length']
       },
       email: {
        type: String,
        required: [true, 'An email must be entered'],
        unique: true,
        validate: {
            validator(val) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig.test(val);
            },
            message: 'Invalid email address'
        }
       },
       
       thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
       }],

       friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
       }]
    }
)


module.exports = userSchema