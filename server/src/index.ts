import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('katastasis is running');
});

app.listen(4269, () => {
  console.log('Server is running on port 4269');
});
