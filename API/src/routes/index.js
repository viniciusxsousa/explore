const { Router } = require("express");

const routes = Router();

const userRoutes = require('./user.routes');
const noteRoutes = require('./note.routes');
const tagsRoutes = require('./tags.routes');


routes.use("/user", userRoutes);
routes.use("/note", noteRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes