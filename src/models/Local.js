const { DataTypes } = require('sequelize')
const connection = require('../database/connection')
const Usuario = require('./Usuario')

const Local = connection.define('locais', {
    nomeLocal: {
        type: DataTypes.STRING(100)
    },
    cepLocal: {
        type: DataTypes.STRING(9)
    },
    cidade: {
        type: DataTypes.STRING(50)
    },
    estado: {
        type: DataTypes.STRING(50)
    },
    descricao: {
        type: DataTypes.STRING
    },
    tipoAtividade: {
        type: DataTypes.STRING
    },
    linkGoogleMaps: {
        type: DataTypes.STRING
    },
    usuarioId: {
        type: DataTypes.INTEGER
    }
}, {
    paranoid: true
})

Local.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
})

module.exports = Local