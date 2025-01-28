const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GPU API',
      version: '1.0.0',
      description: 'API for managing GPU products and related data',
    },
    servers: [
      {
        url: 'http://localhost:3006',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Chemins vers vos fichiers de routes
};

const specs = swaggerJsdoc(options);

module.exports = specs; 