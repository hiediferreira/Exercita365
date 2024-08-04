const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const usuariosRoutes = new Router()

usuariosRoutes.post('/', UsuarioController.criarConta
    /*
        #swagger.tags = ['Usuarios'],
        #swagger.description = 'Endpoint para cadastrar um novo usuário',
        #swagger.parameters['novoUsuario'] = {
            in: 'body',
            description: 'Informações do usuário',
            required: true,
            schema: {
                $nome: 'Fulano',
                $data_nascimento: '2020-08-05',
                $sexo: 'Feminino, Masculino OU Não informado',
                $cpf: '00011122233 - 11 dígitos sem pontos',
                $email: 'nome@email.com',
                $cep: '00000111 - 8 dígitos sem traço',
                $senha: '8 a 16 digitos'
            }

        }
    */
)
usuariosRoutes.get('/', UsuarioController.listar
    /*
        #swagger.tags = ['Usuarios'],
        #swagger.description = 'Endpoint para listar os usuários cadastrados no sistema',
        #swagger.parameters['listarUsuario'] = {
            description: 'Listagem de todos os usuários cadastrados no sistema.'
        }
    */
)

module.exports = usuariosRoutes