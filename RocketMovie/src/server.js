const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3333;

app.listen(PORT, () => console.log(`Rodando a aplicação na porta ${PORT}`));