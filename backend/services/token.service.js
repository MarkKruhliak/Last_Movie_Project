const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ms = require('ms')

module.exports = {
    generateHash: function (password) {
        return bcrypt.hashSync(password, 10)
    },

    compareHash: function (password, hashed) {
        return bcrypt.compareSync(password, hashed)
    },


    createAuthTokens:  (payload) => {
        const access_token =  jwt.sign(payload, process.env.SECRET_KEY_FOR_ACCESS, {expiresIn: '20s'});
        const refresh_token =  jwt.sign(payload, process.env.SECRET_KEY_FOR_REFRESH, {expiresIn: "30d"});
        return {
            access_token,
            refresh_token
        }
    },

}
