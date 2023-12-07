const { Router } = require("express");

const userRoutes = Router();

const UserControllers = require("../controllers/UserControllers");

const userControllers = new UserControllers();

userRoutes.post('/', userControllers.create);
userRoutes.put('/:id', userControllers.update);

module.exports = userRoutes;