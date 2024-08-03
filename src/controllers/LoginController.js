const Usuario = require('../models/Usuario')

const { compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

class LoginController {
    async login(request, response) {
        try {
            const dados = request.body

            if (!dados.email || !dados.senha) {
                return response.status(400).json({ mensagem: 'Nome e senha são campos obrigatórios' })
            }

            const usuario = await Usuario.findOne({
                where: {
                    email: dados.email
                }
            })

            //Se o e-mail informado não existe no banco
            if (!usuario) {
                return response.status(404).json({ mensagem: 'Usuário não encontrado' })
            }

            const senhaCorreta = compareSync(dados.senha, usuario.password_hash)

            if (senhaCorreta === false) {
                return response.status(404).json({ mensagem: 'Usuário não encontrado' })
            }

            const token = sign({
                id: usuario.id
            },
                process.env.JWT_SECRET,
                {
                    expiresIn: '2d' 
                }
            )

            response.json({ 
                token: token,
                usuario: usuario.nome,
                mensagem: 'Seja bem vinda(o)!'
            })

        } catch (error) {
            response.status(500).json({ mensagem: 'Erro ao verificar usuário' })
        }
    }
}

module.exports = new LoginController()