const { config } = require('dotenv')
config()

module.exports = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
}

//neste arquivo ficam as configurações do banco de dados
//em caso de duvida, pesquisar a documentação do sequelize