const { DataTypes } = require('sequelize')
const connection = require('../database/connection')
const { hashSync } = require('bcryptjs')

const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING(50)
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    sexo: {
        type: DataTypes.ENUM('Feminino', 'Masculino', 'Não informdo')
    },
    cpf: {
        type: DataTypes.STRING(11)
    },
    email: {
        type: DataTypes.STRING(100)
    },
    cep: {
        type: DataTypes.STRING(9)
    },
    password_hash: {
        type: DataTypes.STRING
    }
})

//Codificando a senha antes de salvar no banco de dados
Usuario.beforeSave((usuario) => {
    usuario.password_hash = hashSync(usuario.password_hash, 10)
    return usuario
})

module.exports = Usuario