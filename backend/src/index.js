import express from 'express';
import { serverPort, add } from 'shared';

const app = express();

app.get('/', (req, res) => {
  return res.send({ message: 'Hello World' });
});

app.get('/add', (req, res) => {
  const result = add(parseInt(req.query.a), parseInt(req.query.b));
  return res.send({ result });
});

if (import.meta.env.PROD) {
  app.listen(serverPort, () => {
    console.log(`${new Date().toISOString()}: [backend] started on http://localhost:${serverPort}`);
  });
}

export const viteNodeApp = app;
