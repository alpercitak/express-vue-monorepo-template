import express from 'express';
import { serverPort } from 'shared';

const app = express();

app.get('/', (req, res) => {
  return res.send({ message: 'Hello World' });
});

if (import.meta.env.PROD) {
  app.listen(serverPort, () => {
    console.log(`${new Date().toISOString()}: [backend] started on http://localhost:${serverPort}`);
  });
}

export const viteNodeApp = app;
