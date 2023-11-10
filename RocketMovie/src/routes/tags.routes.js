const {Router} = require('express');

const tagsRouter = Router();

const TagsControllers = require('../controllers/TagsControllers');

const tagsControllers = new TagsControllers;

tagsRouter.get('/:user_id', tagsControllers.all);

module.exports = tagsRouter;