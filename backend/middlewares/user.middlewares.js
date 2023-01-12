const UserService = require('../services/user.service')


module.exports = {
    getUserDynamically: async (req, res, next) => {
        try {
            const {email} = req.body

            const user = await UserService.getOneUser({email: email})

            if (!user) {
                return next(new Error("User not found!"))
            }

            req.user = user

            next()
        } catch (e) {
            next(e)
        }

    },

    isExistUser: async (req, res, next) => {
        try {
            const {email} = req.body

            const user = await UserService.getOneUser({email})

            if (user) {
                return next(new Error("User already exist!!"))
            }

            next()

        } catch (e) {
            next(e)
        }
    }
}
