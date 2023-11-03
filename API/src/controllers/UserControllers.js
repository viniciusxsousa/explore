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

    async update(req, res) {
        const { name, email } = req.body;
        const { id } = req.params;

        const database = await sqliteConnection();
        const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]);

        if(!user) {
            throw new AppError('Usuário não encontrado');
        }

        const userWithUpdateEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

        if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new AppError('Este e-mail já está em uso.');
        }

        user.name = name;
        user.email = email;

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?
            WHERE id = ?`,
            [user.name, user.email, id]
            )

        return res.json();
    }
}

module.exports = UserControllers