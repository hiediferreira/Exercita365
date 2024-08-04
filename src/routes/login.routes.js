const { Router } = require('express')
const LoginController = require('../controllers/LoginController')

const loginRoutes = new Router()

loginRoutes.post('/', LoginController.login
    /*
        #swagger.tags = ['Login'],
        #swagger.description = 'Endpoint para logar no sistema',
        #swagger.parameters['login'] = {
            in: 'body',
            description: 'Informações de autenticação do usuário',
            required: true,
            schema: {
                $email: 'user@email.com',
                $senha: '8 a 16 digitos'
            }
        }
    */
)

module.exports = loginRoutes