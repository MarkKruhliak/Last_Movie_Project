const {Schema, model} = require('mongoose')

const authSchema = new Schema({
    access_token: {type: String},
    refresh_token: {type: String},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }

})

module.exports = model('authToken', authSchema)
