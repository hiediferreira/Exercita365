const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Exercita365',
        description: 'API para cadastro de locais de atividades físicas',
        version: '1.0.0',
    },
    host: 'localhost:3000',
    security: [{'apiKeyAuth': []}],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: "Bearer <token>"
        }
    }
};

const arquivoSaida = './src/routes/doc.swagger.json';
const arquivoRotas = ['./src/routes/routes.js'];

swaggerAutogen(arquivoSaida, arquivoRotas, doc);