const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

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

let foruns = [
  { id: 1, titulo: "Debate Tático", descricao: "Análises sobre esquemas, formações e estratégias das equipes.", topicos: 32 },
  { id: 2, titulo: "Mercado da Bola", descricao: "Rumores, transferências e tudo sobre a movimentação das jogadoras.", topicos: 57 },
  { id: 3, titulo: "Seleção Brasileira", descricao: "Convocações, amistosos e o caminho para a próxima Copa do Mundo.", topicos: 41 }
];

app.get('/foruns', (req, res) => res.json(foruns));

let enquete = {
  pergunta: "Qual foi o gol mais bonito da última rodada do Brasileirão?",
  opcoes: [
    "Gol de falta da Ana Silva (São Paulo Fúria FC)",
    "Voleio da Beatriz Costa (Rio Pássaros Azuis)",
    "Chute de fora da área da Carla Mendes (Minas Leoas)",
    "Cabeçada da artilheira (Bahia Tempestade)",
    "Outro"
  ]
};

app.get('/enquete', (req, res) => res.json(enquete));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 
