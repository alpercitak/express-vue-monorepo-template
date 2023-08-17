import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  return res.send({ message: 'Hello World' });
});

if (import.meta.env.PROD) {
  app.listen(port, () => {
    console.log(`${new Date().toISOString()}: [backend] started on http://localhost:${port}`);
  });
}

export const viteNodeApp = app;
