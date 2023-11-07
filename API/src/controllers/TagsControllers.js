const knex = require('../database/knex');

class TagsControllers {
    async all(req, res) {
        const {user_id} = req.params;

        const tags = await knex('tags')
        .where({user_id});

        return res.json(tags);
    }
}

module.exports = TagsControllers;