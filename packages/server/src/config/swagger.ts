import { config } from './config.js';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MUST-EAT Express API with Swagger',
      version: '0.1.0',
      description: '맛집 경험 공유',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: '',
        url: '',
        email: '',
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
      },
    ],
  },
  apis: ['src/routes/**/*.ts'],
};

export { swaggerOptions };
