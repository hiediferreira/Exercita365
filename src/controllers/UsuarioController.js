const Usuario = require('../models/Usuario')

const padraoEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
const padraoCpf = new RegExp(/^\d{11}$/)
const padraoCep = new RegExp(/^\d{8}$/)
const padraoData = new RegExp(/^\d{4}\-\d{2}\-\d{2}$/)

class UsuarioController {
    async criarConta(request, response) {
        try {
            const dados = request.body

            //Verificando se todos os dados foram informados
            if(!dados.nome || !dados.data_nascimento || !dados.sexo || !dados.cpf || !dados.email || !dados.cep || !dados.senha){
                return response.status(400).json({mensagem: 'Todos os campos são obrigatórios!'})
            }

            //Verificando padrão da data de nascimento
            if(padraoData.test(dados.data_nascimento) === false){
                return response.status(400).
                json({mensagem: 'A data deve estar no formato 2000-01-01'})
            }
            
            //Verificando padrão do e-mail
            if(padraoEmail.test(dados.email) === false){
                return response.status(400).
                json({mensagem: 'O e-mail está no formato inválido'})
            }

            //Verificando padrão do cpf
            if(padraoCpf.test(dados.cpf) === false){
                return response.status(400).
                json({mensagem: 'O cpf está no formato inválido. Formato esperado 00011122233'})
            }

            //Verificando padrão do cep
            if(padraoCep.test(dados.cep) === false){
                return response.status(400).
                json({mensagem: 'O CEP está no formato inválido. Formato esperado 00000111'})
            }

            //Verificando tamanho da senha
            if(!(dados.senha?.length >= 8 && dados.senha?.length <= 16)){
                return response.status(400).
                json({mensagem:'A senha é um campo obrigatório e deve ter entre 8 e 16 dígitos'})
            }

            //Verificando se o e-mail já existe
            const emailExistente = await Usuario.findOne(
                {
                    where: {
                        email: dados.email
                    }
                }
            )

            if(emailExistente){
                return response.status(409).json({mensagem:'E-mail informado já existe'})
            }

            //Verificando se o cpf já existe
            const cpfExistente = await Usuario.findOne(
                {
                    where: {
                        cpf: dados.cpf
                    }
                }
            )

            if(cpfExistente){
                return response.status(409).json({mensagem:'CPF informado já existe'})
            }

            //Se passou por todas as validações
            const usuario = await Usuario.create({
                nome: dados.nome,
                data_nascimento : dados.data_nascimento,
                sexo: dados.sexo,
                cpf: dados.cpf,
                email: dados.email,
                cep: dados.cep,
                password_hash: dados.senha
            })
            response.status(201).json(usuario)

        } catch(error) {
            console.log(error)
            response.status(500).json({mensagem: 'Erro ao criar usuário!'})
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
}

module.exports = new UsuarioController()