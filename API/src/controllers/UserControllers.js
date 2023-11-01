const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');
const { hash } = require('bcryptjs');

class UserControllers {
    async create(req, res) {
        const { name, email, password } = req.body

        const database = await sqliteConnection();
        const checkUserExist = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

        if(checkUserExist) {
            throw new AppError('O usuário já existe!');
        }

        const hashedPassword = await hash(password, 8);

        await database.run(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        );

        return res.status(201).json();

    }
}

module.exports = UserControllers