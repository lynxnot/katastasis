import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: Number = 4269;

app.get('/', (req: Request, res: Response) => {
  res.send('katastasis is running');
});

app.listen(port, () => {
  console.log('Server is running on port %d', port);
});
