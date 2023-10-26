const express = require('express');

const app = express();

app.post('/user', (req, res)=>{
    res.send('Você fez um pedido do tipo POST');
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Rodando a aplicação na porta ${PORT}`));
