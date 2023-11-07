require('express-async-errors');

const database = require('./database/knex');

const express = require('express');

const AppError = require('./utils/AppError');

const app = express();
const routes = require('./routes');

database();

app.use(express.json());
app.use(routes);

app.use( (error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.log(error);

    return response.status(500).json({
        status: 'error',
        message: 'Erro interno.'
    })
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Rodando a aplicação na porta ${PORT}`));