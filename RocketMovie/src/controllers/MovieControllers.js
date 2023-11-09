const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class MovieControllers{
    async create(req, res) {
        const {title, description, rating} = req.body;
        const {user_id} = req.params;

        if(!title) {
            throw new AppError('O título é obrigatório.');
        }

        if(!description) {
            throw new AppError('A descrição é obrigatória.');
        }

        if(!rating) {
            throw new AppError('A nota é obrigatória.');
        }

        await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id
        })

        return res.json({
            title,
            description,
            rating,
            user_id,
        })
    }
}

module.exports = MovieControllers