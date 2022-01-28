const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username can not be empty.'],
        minlength: [6, 'please enter atleast 6 letter'],
        maxlength: 64,
        unique: [true, 'username already present']
    },
    password: {
        type: String,
        required: [true, 'password can not be empty.'],
        minlength: 8,
        maxlength: 128
    },
    email: {
        type: String,
        required: [true, 'email can not be empty.'],
        unique: true,
        validate: {
            validator: function (value) {
                return isEmail(value)
            },
            message: function () {
                return 'Invalid Email Format'
            }
        }
    }
})


const User = mongoose.model('User', userSchema)

module.exports = User;