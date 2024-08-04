const { Router } = require('express')
const LocalController = require('../controllers/LocalController')

const locaisRoutes = new Router()

locaisRoutes.post('/', LocalController.criarLocal
    /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para cadastrar um novo local',
        #swagger.parameters['novoLocal'] = {
            in: 'body',
            description: 'Informações sobre o local',
            required: true,
            schema: {
                $nome: 'Trilha do Santinho',
                $cep: '00000111 - 8 dígitos sem traço',
                $descricao: 'Breve descrição sobre o local',
                $atividade: 'Atividade física que você julga interessante praticar neste local',
            }
        }
    */
)
locaisRoutes.get('/', LocalController.listarTodos
    /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para listar todos os locais cadastrado pelo usuário',
        #swagger.parameters['listaLocais'] = {
            description: 'Listagem de todos os locais cadastrados pelo usuário'
        }
    */
)
locaisRoutes.get('/:id', LocalController.listarEspecifico
    /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para listar um local específico cadastrado pelo usuário',
        #swagger.parameters['listaLocal'] = {
            description: 'Lista um local específico cadastrado pelo usuário, conforme o id passado na requisição'
        }
    */
)
locaisRoutes.delete('/:id', LocalController.deletarLocal
    /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para deletar um local cadastrado pelo usuário',
        #swagger.parameters['deletarLocal'] = {
            description: 'Deleta um local específico cadastrado pelo usuário, conforme o id passado na requisição'
        }
    */
)
locaisRoutes.put('/:id', LocalController.atualizarLocal
    /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para editar um local cadastrado pelo usuário',
        #swagger.parameters['atualizaLocal'] = {
            description: 'Atualiza um local específico para os dados passados no body, conforme o id passado na requisição.',
            in: 'body',
            schema: {
                $nome: 'Novo nome do local',
                $cep: '00000111 - 8 dígitos sem traço',
                $descricao: 'Breve descrição sobre o local',
                $atividade: 'Atividade física que você julga interessante praticar neste local'
            }   
        }
    */
)

module.exports = locaisRoutes