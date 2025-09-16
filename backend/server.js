const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());
app.post('/arenaDelas', (req, res) => {
  res.json({ message: "Backend rodando!"});
});
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});