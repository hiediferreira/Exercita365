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
                        attributes: ['nome', 'id']
                    }
                ]
            })

            response.json(locais)

        } catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao listar os locais!'})
        }
    }

    async listarEspecifico(request, response) {
        try {
            const {userId} = request //esse id está contido no token do usuário que está autenticado
            const id = request.params.id

            const local = await Local.findAll({
                where: {
                    usuarioId: userId,
                    id: id
                }
            })

            if(local.length === 0) {
                return response.status(404).json({mensagem: 'Índice não encontrado'})
            }

            response.json(local)

        } catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao listar os locais!'})
        }
    }

    async deletarLocal(request, response) {
        try {
            const {userId} = request //esse id está contido no token do usuário que está autenticado
            const id = request.params.id

            const local = await Local.findOne({
                where: {
                    usuarioId: userId,
                    id: id
                }
            })

            if(local.length === 0) {
                return response.status(404).json({mensagem: 'Índice não encontrado'})
            }

            await local.destroy()
            response.status(204).json()
        } catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao deletar local!'})
        }
    }

    async atualizarLocal(request, response) {
        try {
            const {userId} = request //esse id está contido no token do usuário que está autenticado
            const id = request.params.id
            const dados = request.body

            const local = await Local.findOne({
                where: {
                    usuarioId: userId,
                    id: id
                }
            })

            if(local.length === 0) {
                return response.status(404).json({mensagem: 'Índice não encontrado'})
            }

            //Pega o que já existe e substitui pelo novo dado que vai vir pelo body

            local.cepLocal = dados.cep

            if(dados.cep){ //se foi informado um cep, atualiza o link 
                const resultado = await getDadosCep(dados.cep) //pega os dados do novo cep informado pelo usuário
                console.log(`Cidade: ${resultado.city}, Estado: ${resultado.state}, Latitude: ${resultado.lat}, Longitude: ${resultado.lng}`)

                const linkGoogle = `https://www.google.com/maps?q=${resultado.lat},${resultado.lng}`
                console.log(linkGoogle)

                local.cidade = resultado.city,
                local.estado = resultado.state,
                local.linkGoogleMaps = linkGoogle
            }

            local.nomeLocal = dados.nome,
            local.descricao = dados.descricao,
            local.tipoAtividade = dados.atividade,
        
            local.usuarioId = userId

            await local.save()

            response.json(local)

        } catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao atualizar local!'})
        }
    }
}

module.exports = new LocalController()