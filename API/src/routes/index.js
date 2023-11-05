const { Router } = require("express");

const routes = Router();

const userRoutes = require('./user.routes');
const noteRoutes = require('./note.routes');

routes.use("/user", userRoutes);
routes.use("/note", noteRoutes);

module.exports = routes