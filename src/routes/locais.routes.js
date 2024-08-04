const { Router } = require('express')
const LocalController = require('../controllers/LocalController')

const locaisRoutes = new Router()

locaisRoutes.post('/', LocalController.criarLocal)
locaisRoutes.get('/', LocalController.listarTodos)
locaisRoutes.get('/:id', LocalController.listarEspecifico)
locaisRoutes.delete('/:id', LocalController.deletarLocal)
locaisRoutes.put('/:id', LocalController.atualizarLocal)

module.exports = locaisRoutes