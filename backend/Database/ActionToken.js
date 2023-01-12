const {model, Schema} = require('mongoose')

const ActionSchema = new Schema({
    token : {type: String},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
})

module.exports = model('actionToken', ActionSchema )
