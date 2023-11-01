const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');

class UserControllers {
    async create(req, res) {
        const { name, email, password } = req.body

        const database = await sqliteConnection();
        const checkUserExist = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

        if(checkUserExist) {
            console.log(checkUserExist);
            throw new AppError('O usuário já existe!');
        }

        return res.status(201).json();

    }
}

module.exports = UserControllers