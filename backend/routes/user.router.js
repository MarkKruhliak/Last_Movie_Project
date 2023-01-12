const {Router} = require('express')

const UserController = require('../controllers/user.controller')
const {userMDLW} = require("../middlewares");


const UserRouter = Router();


UserRouter.post('/', userMDLW.isExistUser, UserController.createUser)
UserRouter.get('/', UserController.getAllUsers)
UserRouter.get('/:userId', UserController.getOneUser)


module.exports = UserRouter;
