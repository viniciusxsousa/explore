const {Router} = require('express');

const routes = Router();

const userRouter = require('./user.routes');
const movieRouter = require('./movie.routes');

routes.use('/user', userRouter);
routes.use('/movie', movieRouter);

module.exports = routes