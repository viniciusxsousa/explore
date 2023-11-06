const {Router} = require("express");

const userRouter = Router();

const UserControllers = require('../controllers/UserControllers');

const userControllers = new UserControllers();

userRouter.post('/', userControllers.create);

module.exports = userRouter