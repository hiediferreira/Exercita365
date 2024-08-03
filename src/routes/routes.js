const { Router } = require('express')

//Importando as rotas
const usuariosRoutes = require('./usuarios.routes')

const routes = new Router()

//Rotas públicas
routes.use('/usuario', usuariosRoutes)

//Rotas privadas

module.exports = routes