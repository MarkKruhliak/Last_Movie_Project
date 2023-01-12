const authService = require('../services/auth.service')
const jwt = require('jsonwebtoken')
const {refresh} = require("../controllers/auth.controller");

module.exports = {
    checkIsAccessToken: async (req, res, next) => {

        try {
            const access_token = req.get('Authorization')

            if (!access_token) {
                return next(new Error("User is not authorization!"))
            }

            const result = await authService.getOneWithUser({access_token})


            if (!result) {
                return next(new Error("No token with this user!"))
            }

            req.info = result;

            next()

        } catch (e) {
            next(e)
        }
    },

    checkIsRefreshToken: async (req, res, next) => {


        try {
            const refresh_token = req.headers.authorization


            if (!refresh_token) {
                return next(new Error("No token!"))
            }

            const verifyToken = jwt.verify(refresh_token, process.env.SECRET_KEY_FOR_REFRESH)

            const {user} = await authService.getOneWithUser({refresh_token})

            console.log(user);


            if (!user) {
                return next(new Error("This token already die"))
            }

            if (!verifyToken) {
                return next(new Error("Not valid token"))
            }

            req.user = user;

            next()

        } catch (e) {
            next(e)
        }

    }
}
