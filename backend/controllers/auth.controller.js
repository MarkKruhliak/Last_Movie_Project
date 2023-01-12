const TokenService = require('../services/token.service')
const AuthService = require('../services/auth.service')
const UserService = require('../services/user.service')
const jwt = require('jsonwebtoken')

module.exports = {
    login: async (req, res, next) => {

        try {
            const {password} = req.body
            const {password: hashedpassword, _id} = req.user

            const compareHashResult = await TokenService.compareHash(password, hashedpassword)

            if (!compareHashResult) {
                return next(new Error("Password is not correct!"))
            }

            const authToken = await TokenService.createAuthTokens({user: _id})

            await AuthService.deleteOneByParams({user: _id})
            await AuthService.saveToken({...authToken, user: _id})


            res.json({
                ...authToken,
                user: req.user
            })

        } catch (e) {
            next(e)
        }
    },

    logout: async (req, res, next) => {

        const {user, access_token} = req.info


        await AuthService.deleteOneByParams({user})

        res.json("Everything Okay")

    },

    refresh: async (req, res, next) => {
        try {
            const user = req.user;


            const result = await AuthService.deleteOneByParams({user})


            if (!result) {
                return next(new Error("Cannot find this user"))
            }

            const TokenForNew = await TokenService.createAuthTokens({...user._id})
            await AuthService.saveToken({...TokenForNew, user: user._id})

            res.json(TokenForNew)

        } catch (e) {
            next(e)
        }
    },

    forgotPassword: async (req, res, next) => {


    }
}
