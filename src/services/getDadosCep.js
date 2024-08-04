const axios = require('axios')

/**
  Referência: https://docs.awesomeapi.com.br/api-cep
  Awesome Api Cep
*/

const url = 'https://cep.awesomeapi.com.br/json/'

async function getDadosCep(cep) {
    try {
        const response = await axios.get(`${url}${cep}`)

        if(!response.data || response.data.length === 0){
            throw new Error('CEP não encontrado')
        }

        return response.data

    } catch(error) {
        return console.log(error)
    }
}

module.exports = getDadosCep
