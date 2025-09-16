import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Clubes() {
  const [clubes, setClubes] = useState([]);
  const [form, setForm] = useState({ nome: "", cidade: "", estado: "" });

  useEffect(() => {
    fetch("http://localhost:3001/clubes")
      .then(res => res.json())
      .then(data => setClubes(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/clubes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setClubes([...clubes, data.item]);
          setForm({ nome: "", cidade: "", estado: "" });
        } else {
          alert(data.error);
        }
      });
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/jogadoras">Jogadoras</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/clubes">Clubes</Link>
          <Link to="/comunidade">Comunidade</Link>
        </nav>
      </header>

      <h2>Cadastro de Clubes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do clube"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={form.cidade}
          onChange={handleChange}
        />
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={form.estado}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <h3>Clubes Cadastrados</h3>
      <ul>
        {clubes.map((c) => (
          <li key={c.id}>
            {c.nome} - {c.cidade}/{c.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clubes;
