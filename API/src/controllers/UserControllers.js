const AppError = require('../utils/AppError');

class UserControllers {
    create(req, res) {
        const { name, email, password } = req.body

        if(!name) {
            throw new AppError('O nome é obrigatório!');
        }

        res.send({name, email, password});
    }
}

module.exports = UserControllers