const { Router } = require("express");

const userRoutes = Router();

userRoutes.post('/', (req, res)=>{
    const { name, email, password } = req.body

    res.send({name, email, password});
})

module.exports = userRoutes;