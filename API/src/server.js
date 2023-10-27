const express = require('express');

const app = express();
app.use(express.json());

app.post('/user', (req, res)=>{
    const { name, email, password } = req.body

    res.send({name, email, password});
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Rodando a aplicação na porta ${PORT}`));
