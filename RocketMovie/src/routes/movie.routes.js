const {Router} = require('express');

const movieRouter = Router();

const MovieControllers = require('../controllers/MovieControllers');

const movieControllers = new MovieControllers();

movieRouter.post('/:user_id', movieControllers.create);
movieRouter.get('/:id', movieControllers.show);

module.exports = movieRouter;