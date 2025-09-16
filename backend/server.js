const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post('/arenaDelas', (req, res) => {
  res.json({ message: "Backend rodando!"});
});

let jogadoras = [];
let nextId = 1;

app.post('/jogadoras', (req, res) => {
  const { nome, posicao, time, qualidades, bio } = req.body;

  if (!nome || !posicao || !time) {
    return res.status(400).json({ error: "Todos os campos obrigatórios!" });
  }

  const newPlayer = {
    id: nextId++,
    nome,
    posicao,
    time,
    qualidades: qualidades || "",
    bio: bio || ""
  };

  jogadoras.push(newPlayer);
  res.status(201).json({ message: "Jogadora cadastrada com sucesso!", player: newPlayer });
});

app.get('/jogadoras', (req, res) => {
  res.json(jogadoras);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});