//Configurações do servidor
const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')
const connection = require('./database/connection')

const APP_PORT = process.env.APP_PORT
class Server {
    constructor(server = express()) {
        this.middlewares(server) //chama os middlewares
        this.database()          //se conecta ao banco de dados
        server.use(routes)       //registra as rotas
        this.initializeServer(server) //inicializa o servidor
    }

    async middlewares(server){
        server.use(cors())
        server.use(express.json()) //habilita a API a trabalhar com json
    } //middlewares são funções que serão executadas entre rota e controllers

    async database(){
        try{
            console.log('Conectando ao banco de dados...')
            await connection.authenticate()//se conecta ao banco usando sequelize
        } catch(error) {
            console.log('Erro ao conectar com o bando de dados: ', error)
        }
    }

    async initializeServer(server){
        server.listen(APP_PORT, () => {
            console.log(`Servidor rodando na porta ${APP_PORT}`)
        }) 
    }
}

module.exports = { Server }