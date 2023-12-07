const { Router } = require("express");

const userRoutes = Router();

const UserControllers = require("../controllers/UserControllers");

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const userControllers = new UserControllers();

userRoutes.post('/', userControllers.create);
userRoutes.put('/', ensureAuthenticated, userControllers.update);

module.exports = userRoutes;