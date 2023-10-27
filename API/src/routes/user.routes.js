const { Router } = require("express");

const userRoutes = Router();

const UserControllers = require("../controllers/UserControllers");

const userControllers = new UserControllers();

userRoutes.post('/', (req, res)=>{
    userControllers.create(req, res);
})

module.exports = userRoutes;