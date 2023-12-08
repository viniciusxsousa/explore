const { Router } = require("express");
const multer = require('multer');
const uploadConfig = require('../config/upload');

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const UserControllers = require("../controllers/UserControllers");

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const userControllers = new UserControllers();

userRoutes.post('/', userControllers.create);
userRoutes.put('/', ensureAuthenticated, userControllers.update);
userRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), (req, res) => {
    console.log(req.file.filename);
    res.json();
})

module.exports = userRoutes;