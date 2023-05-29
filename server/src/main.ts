import express, { Express, Request, Response } from 'express';
import config from 'config';

const app: Express = express();
const port: number = config.get('server.port');

app.get('/', (req: Request, res: Response) => {
  res.send('katastasis is running');
});

app.listen(port, () => {
  console.log('Server is running on port %d', port);
});
