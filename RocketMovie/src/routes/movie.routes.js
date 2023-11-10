const {Router} = require('express');

const movieRouter = Router();

const MovieControllers = require('../controllers/MovieControllers');

const movieControllers = new MovieControllers();

movieRouter.post('/:user_id', movieControllers.create);
movieRouter.get('/:id', movieControllers.show);
movieRouter.get('/', movieControllers.all);
movieRouter.delete('/:id', movieControllers.delete);

module.exports = movieRouter;