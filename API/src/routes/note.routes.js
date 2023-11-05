const { Router } = require("express");

const notesRoutes = Router();

const NotesControllers = require("../controllers/NotesControllers");

const notesControllers = new NotesControllers();

notesRoutes.post('/:user_id', notesControllers.create);
notesRoutes.get('/:id', notesControllers.show);

module.exports = notesRoutes;