const UserService = require('../services/user.service')
const {User} = require("../Database");
const TokenService = require('../services/token.service')

module.exports = {
    createUser: async (req, res, next) => {

        const password = await TokenService.generateHash(req.body.password)
        await UserService.createUser({...req.body, password: password})

        res.json('Everything Ok!')

    },

    getAllUsers: async (req, res, next) => {
        const users = await User.find()

        res.json(users)
    },

    getOneUser: async (req, res, next) => {
        const {userId} = req.params
        console.log(userId);

        const result = await UserService.getUserById(userId)
        console.log(result);

        res.json(result)
    },

    testFunction: async () => {
        console.log('Hello everybody')
    }
}
