const {Router} = require('express');

const routes = Router();

const userRouter = require('./user.routes');

routes.use('/user', userRouter);

module.exports = routes