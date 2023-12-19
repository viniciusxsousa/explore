const {Router} = require("express");

const userRouter = Router();

const UserControllers = require('../controllers/UserControllers');

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const userControllers = new UserControllers();

userRouter.post('/', userControllers.create);
userRouter.put('/', ensureAuthenticated, userControllers.update);

module.exports = userRouter