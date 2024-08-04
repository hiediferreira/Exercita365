const { verify } = require('jsonwebtoken')
async function validaToken(request, response, next){
    try {
        //pegar o token que vai chegar na requisição
        const token = request.headers.authorization

        if(!token){
            return response.status(400).json({mensagem: 'Token não anexado!'})
        }

        const jwt = token.split(" ") //split vai devolver um array de 2 posições, queremos a 2ª posição

        const resultado = verify(jwt[1], process.env.JWT_SECRET)
        console.log(resultado)

        request.userId = resultado.id
        
        next() 
        
    } catch(error){
        console.log(error.message)
        if(error.message === 'invalid token' || error.message === 'jwt malformed' || error.message === 'jwt expired'){
            response.status(401).json({mensagem: 'Token inválido ou expirado!'})
        }else {
            response.status(500).json({mensagem: 'Falha na requisição'})
        }
    }
}

module.exports = validaToken