const mongoose = require('mongoose')
const User = require('./userModel')


const workerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A worker must have a name'],
        unique: true,
    },
    surname: {
        type: String,
        required: [true, 'A worker must have a surname'],
        unique: true,
    },
    specialization: {
        type: String,
        required: [true, 'A worker must have a specialization' ],
        enum:{
            values: ['Varikliu specialistas','Elektrikas','Tinginys']
        }
    },
    worker_photo: {
        type: String,
        required: [true, 'A worker must submit a photo']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
    autoshop: {
        type: mongoose.Schema.ObjectId,
        ref: "Autoshop",
        required: [true, 'Which autoshop is he working in?']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, 'Which user is this linked to?']
    },
    isLiked: {
        type:Boolean,
        default:false
    }
},
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
}

)


const Worker = mongoose.model('Worker', workerSchema)

module.exports = Worker
