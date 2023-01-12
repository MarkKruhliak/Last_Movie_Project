const AuthService = require('../services/auth.service')
const jwt = require('jsonwebtoken')

module.exports = {
    checkIsUserHasAccess: async (req, res, next) => {

        try {

            const access_token = req.headers.authorization


            const verifyToken = jwt.verify(access_token, process.env.SECRET_KEY_FOR_ACCESS)


            if (!verifyToken) {
                return next(new Error("User is not authorization"))
            }

            const user = await AuthService.getOneWithUser({access_token});

            console.log(user);

            if (!user) {
                return next(new Error("No token in BD"))
            }

            res.json('Everything Ok')

        } catch (e) {
            next(e)
        }

    }
}
