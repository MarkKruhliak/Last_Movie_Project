const {Router} = require('express')
const {userMDLW, authMDLW} = require("../middlewares");
const AuthController = require('../controllers/auth.controller')

const authRouter = Router();

authRouter.post('/login', userMDLW.getUserDynamically, AuthController.login )
authRouter.post('/logout', authMDLW.checkIsAccessToken, AuthController.logout )
authRouter.post('/refresh', authMDLW.checkIsRefreshToken, AuthController.refresh )
authRouter.post('/forgot/password', authMDLW.checkIsAccessToken, AuthController.logout )
authRouter.put('/forgot/password', authMDLW.checkIsAccessToken, AuthController.logout )

module.exports = authRouter;
