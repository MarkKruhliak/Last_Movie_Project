const User = require('../Database/User')


module.exports = {
    createUser(userObject) {
        return User.create(userObject)
    },

    updateUser(userId, data) {
        return User.findOneAndUpdate(userId, data, {new: true})
    },

    getUserById(data) {
        return User.findById(data).select(['+access_token']).populate('access_token')
    },

    getOneUser(filter) {
        return User.findOne(filter)
    }
}
