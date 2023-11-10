const knex = require('../database/knex');

class TagsControllers{
    async all(req, res){
        const {user_id} = req.params;

        const tags = await knex("movie_tags").where({user_id});

        res.json(tags);
    }
}

module.exports = TagsControllers