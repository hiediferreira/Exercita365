const { Router } = require('express')

//Importando as rotas
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')
const locaisRoutes = require('./locais.routes')
const validaToken = require('../middlewares/validaToken')

const routes = new Router()

//Rotas públicas
routes.use('/usuario', usuariosRoutes)
routes.use('/login', loginRoutes)

//Rotas privadas
routes.use('/local', validaToken, locaisRoutes)

module.exports = routes