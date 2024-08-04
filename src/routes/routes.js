const { Router } = require('express')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./doc.swagger.json')

//Importando as rotas
const usuariosRoutes = require('./usuarios.routes')
const loginRoutes = require('./login.routes')
const locaisRoutes = require('./locais.routes')
const validaToken = require('../middlewares/validaToken')

const routes = new Router()

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//Rotas públicas
routes.use('/usuario', usuariosRoutes)
routes.use('/login', loginRoutes)

//Rotas privadas
routes.use('/local', validaToken, locaisRoutes)

module.exports = routes