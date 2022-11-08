const mongoose = require('mongoose')

let Schema = mongoose.Schema
const UserSchema = new Schema(
    {
        rollnumber: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
    }
)

const User = mongoose.model('Students', UserSchema)

module.exports = User
