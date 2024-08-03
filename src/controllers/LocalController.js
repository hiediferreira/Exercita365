const Usuario = require('../models/Usuario')

const Local = require('../models/Local')
const getDadosCep = require('../services/getDadosCep')

const padraoCep = new RegExp(/^\d{8}$/)

class LocalController {
    async criarLocal(request, response) {
        try {
            const {userId} = request  //esse id está contido no token do usuário que está autenticado

            const dados = request.body

            //verificando se foi informado nome e cep do local
            if(!dados.nome || !dados.cep) {
                return response.status(400).json({mensagem: 'O nome e o cep do local são campos obrigatórios'})
            }

            //Verificando padrão do cep
            if(padraoCep.test(dados.cep) === false){
                return response.status(400).
                json({mensagem: 'O CEP está no formato inválido. Formato esperado 00000111'})
            }

            //verificando se foi informada a atividade física
            if(!dados.atividade) {
                return response.status(400).json({mensagem: 'Informe ao menos uma atividade que possa ser praticada neste local'})
            }

            //Se passou por todas as validações
            const resultado = await getDadosCep(dados.cep) //pega os dados do cep informado pelo usuário
            console.log(`Cidade: ${resultado.city}, Estado: ${resultado.state}, Latitude: ${resultado.lat}, Longitude: ${resultado.lng}`)

            const linkGoogle = `https://www.google.com/maps?q=${resultado.lat},${resultado.lng}`
            console.log(linkGoogle)

            //Salvando no banco de dados:
            const local = await Local.create({
                nomeLocal: dados.nome,
                cepLocal: dados.cep,
                cidade: resultado.city,
                estado: resultado.state,
                descricao: dados.descricao,
                tipoAtividade: dados.atividade,
                linkGoogleMaps: linkGoogle,
                usuarioId: userId
            })
            response.status(201).json(local)

        } catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao criar o local!'})
        }
    }

    async listarTodos(request, response) {
        try {
            const {userId} = request  //esse id está contido no token do usuário que está autenticado

            const locais = await Local.findAll({
                where: {
                    usuarioId: userId
                },
                attributes: ['id', 'nomeLocal', 'cepLocal', 'cidade', 'estado', 'descricao', 'tipoAtividade', 'linkGoogleMaps'],
                include: [
                    {
                        model: Usuario,
                        attributes: ['nome']
                    }
                ]
            })

            response.json(locais)

        } catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao listar os locais!'})
        }
    }

    async listar(request, response){
        try {
            const dados = request.query
            
            if(dados.nome){
                const usuario = await Usuario.findAll({
                    where: {
                        nome: `${dados.nome}`
                    }                    
                })
                response.json(usuario)
            } else {
                const usuarios = await Usuario.findAll({
                    attributes: ['id', 'nome', 'email', 'cep']
                })
                response.json(usuarios)
            }

        } catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao listar usuário(s)!'})
        }
    }






    async listarEspecifico(request, response) {
        try {

        } catch(error) {

        }
    }

    async deletarLocal(request, response) {
        try {

        } catch(error) {

        }
    }

    async atualizarLocal(request, response) {
        try {

        } catch(error) {

        }
    }
}

module.exports = new LocalController()