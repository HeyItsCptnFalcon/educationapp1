const mongoose = require('mongoose');
const Schema = mongoose.Schema

mongoose.set('userCreateIndex', true);

const userSchema = new Schema({

    userName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: false,
        trim: true,
    },
    gradeLevel: {
        type: Number,
        required: false,
        trim: true
    },
    isInSchool: {
        type: Boolean,
        required: false,
        trim: true,
    },
    uri: {
        type: String,
        required: false,
        trim: true,
    }




});

const Users = mongoose.model('Users', userSchema)
module.exports = Users;