const AppError = require('../utils/AppError');
const knex = require('../database/knex');

class MovieControllers{
    async create(req, res) {
        const {title, description, rating, tags} = req.body;
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

        const [movie_id] = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id
        })

        const tagsInsert = tags.map( name => {
            return {
                name,
                movie_id,
                user_id
            }
        })

        await knex('movie_tags').insert(tagsInsert);

        return res.json({
            title,
            description,
            rating,
            user_id,
        })
    }

    async show(req, res) {
        const {id} = req.params;

        const movie = await knex('movie_notes').where({id}).first();
        const tags = await knex('movie_tags').where({movie_id: id}).orderBy('name');

        res.json({
            ...movie,
            tags
        });
    }
}

module.exports = MovieControllers