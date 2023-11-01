const { Router } = require("express");

const userRoutes = Router();

const UserControllers = require("../controllers/UserControllers");

const userControllers = new UserControllers();

function myMiddleware(req, res, next) {
    console.log('exibindo os dados da requisição:');
    console.log(req.body);
    next();
}


userRoutes.post('/', myMiddleware, userControllers.create);
userRoutes.put('/:id', userControllers.update);

module.exports = userRoutes;