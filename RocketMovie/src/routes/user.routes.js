const {Router} = require("express");
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const userRouter = Router();
const upload = multer(uploadConfig.MULTER);

const UserControllers = require('../controllers/UserControllers');

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const userControllers = new UserControllers();

userRouter.post('/', userControllers.create);
userRouter.put('/', ensureAuthenticated, userControllers.update);
userRouter.patch('/avatar', ensureAuthenticated, upload.single("avatar"), (req, res) => {
    console.log(req.file.filename);
    res.json();
})

module.exports = userRouter