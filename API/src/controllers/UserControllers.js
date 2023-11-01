const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');

class UserControllers {
    async create(req, res) {
        const { name, email, password } = req.body

        const database = await sqliteConnection();
        const checkUserExist = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

        if(checkUserExist) {
            throw new AppError('O usuário já existe!');
        }

        await database.run(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );

        return res.status(201).json();

    }
}

module.exports = UserControllers