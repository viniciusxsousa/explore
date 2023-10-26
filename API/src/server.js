const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.get('/user/:id', (req, res) => {
    res.send(`O id do usuário é ${req.params.id}`);
})

app.get('/product', (req, res) => {
    const {page, limit} = req.query;

    res.send(`Página ${page}, itens por página ${limit}`);
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Rodando a aplicação na porta ${PORT}`));
