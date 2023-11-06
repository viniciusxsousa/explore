class UserControllers{
    create(req, res){
        console.log('Função de criar usuário.');

        return res.json({
            message: 'Cadastro realizado.'
        });
    }
}

module.exports = UserControllers