const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  return res.send({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`${new Date().toISOString()}: [backend] started on http://localhost:${port}`);
});
