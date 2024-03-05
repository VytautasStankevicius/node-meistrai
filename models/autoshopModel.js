const mongoose = require('mongoose')
// const User = require('./userModel')

const autoshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'An autoshop must have a name'],
        unique: true,
    },
    address: {
        type: String,
        required: [true, 'An autoshop must have a address'],
    },
    manager:{
        type:String,
        required: [true, 'An autoshop must have a manager']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
    worker: [
        {type: mongoose.Schema.ObjectId,
            ref:"Worker"
        }
    ]
    
},
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
}

)

autoshopSchema.pre(/^find/, function(next){
    this.populate({
        path:"worker",
        select:""
    })
    next()
    })


const Autoshop = mongoose.model('Autoshop', autoshopSchema)

module.exports = Autoshop


