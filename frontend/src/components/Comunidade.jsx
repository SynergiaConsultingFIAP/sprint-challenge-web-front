import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Comunidade() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ autor: "", mensagem: "" });

  useEffect(() => {
    fetch("http://localhost:3001/comunidade")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/comunidade", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setPosts([...posts, data.item]);
          setForm({ autor: "", mensagem: "" });
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

      <h2>Comunidade</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="autor"
          placeholder="Seu nome"
          value={form.autor}
          onChange={handleChange}
        />
        <textarea
          name="mensagem"
          placeholder="Digite sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      <h3>Mensagens</h3>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.autor}:</strong> {p.mensagem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comunidade;
