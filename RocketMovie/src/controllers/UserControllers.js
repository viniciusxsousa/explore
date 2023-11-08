const AppError = require('../utils/AppError');
const knex = require('../database/knex');
const { hash } = require('bcryptjs');

class UserControllers{
    async create(req, res){

        const { name, email, password } = req.body;

        if(!name) {
            throw new AppError('O nome é obrigatório.');
        }

        if(!password) {
            throw new AppError('Uma senha deve ser informada.');
        }

        const userExist = await knex('users').where({email}).first();

        if(userExist) {
            throw new AppError('Usuário já existe.');
        }

        const hashPassword = await hash(password, 8);

        await knex('users').insert({
            name,
            email,
            password: hashPassword
        })

        return res.json({
            name, 
            email,
            hashPassword
        });
    }
}

module.exports = UserControllers