const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post('/arenaDelas', (req, res) => {
  res.json({ message: "Backend rodando!" });
});


let jogadoras = [];
let nextJogadoraId = 1;

app.post('/jogadoras', (req, res) => {
  const { nome, posicao, time, qualidades, bio } = req.body;

  if (!nome || !posicao || !time) {
    return res.status(400).json({ error: "Todos os campos obrigatórios!" });
  }

  const newPlayer = {
    id: nextJogadoraId++,
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

let clubes = [];
let nextClubeId = 1;

app.post('/clubes', (req, res) => {
  const { nome, cidade, estado, email, telefone, descricao } = req.body;

  if (!nome || !cidade || !estado || !email) {
    return res.status(400).json({ error: "Preencha nome, cidade, estado e email." });
  }

  const newClube = {
    id: nextClubeId++,
    nome,
    cidade,
    estado,
    email,
    telefone: telefone || "",
    descricao: descricao || ""
  };

  clubes.push(newClube);
  res.status(201).json({ message: "Clube cadastrado com sucesso!", clube: newClube });
});

app.get('/clubes', (req, res) => {
  res.json(clubes);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
