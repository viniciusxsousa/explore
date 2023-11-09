const {Router} = require('express');

const movieRouter = Router();

const MovieControllers = require('../controllers/MovieControllers');

const movieControllers = new MovieControllers();

movieRouter.post('/:user_id', movieControllers.create);

module.exports = movieRouter;