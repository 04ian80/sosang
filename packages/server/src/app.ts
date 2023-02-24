import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';

import { routes } from './routes/index.js';
import { config } from './config/config.js';
import { swaggerOptions } from './config/swagger.js';

const app: Express = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('tiny'));

const specs = swaggerJsdoc(swaggerOptions);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);
app.use(routes);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hi!');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.sendStatus(500);
});

const port = config.port;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
