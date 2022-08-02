// DEPENDENCIES
const mongoose = require('mongoose')
const Bread = require('./bread')
const { Schema } = mongoose

// SCHEMA
const bakerSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
      type: Schema.Types.ObjectID,
      ref: 'Baker'
    }
},

 {toJSON: { virtuals: true }})

// VIRTUALS 
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// HOOKS 
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({ baker: this._conditions._id })
        .then(deleteStatus => {
            console.log(deleteStatus)
        })
})

// MODEL AND EXPORT
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker