const AuthToken = require('../Database/AuthToken')
const User = require("../Database/User");

module.exports = {
    saveToken(token) {
        return AuthToken.create(token)
    },

    getOneWithUser(filter){
        return AuthToken.findOne(filter).populate('user')
    },

    deleteOneByParams (filter) {
        return AuthToken.deleteOne(filter)
    },

    updateUser(userId, data) {
        return User.findOneAndUpdate(userId, data)
    },



}
