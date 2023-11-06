const {Router} = require("express");

const userRouter = Router();

userRouter.post('/', () => console.log('função de cadastrar usuário'));

module.exports = userRouter