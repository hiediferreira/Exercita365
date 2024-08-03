const { Router } = require('express')
const LocalController = require('../controllers/LocalController')

const locaisRoutes = new Router()

locaisRoutes.post('/', LocalController.criarLocal)
locaisRoutes.get('/', LocalController.listarTodos)
locaisRoutes.get('/:local_id', LocalController.listarEspecifico)
locaisRoutes.put('/:local_id', LocalController.atualizarLocal)


module.exports = locaisRoutes