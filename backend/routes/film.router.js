const {Router} = require('express')
const {checkIsUserHasAccess} = require('../middlewares/access.middleware')
const AuthController = require('../controllers/auth.controller')

const filmRouter = Router();


filmRouter.post('/', checkIsUserHasAccess )



module.exports = filmRouter;
