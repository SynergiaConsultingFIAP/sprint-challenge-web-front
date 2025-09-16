import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [form, setForm] = useState({ titulo: "", conteudo: "" });

  useEffect(() => {
    fetch("http://localhost:3001/noticias")
      .then(res => res.json())
      .then(data => setNoticias(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/noticias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setNoticias([...noticias, data.item]);
          setForm({ titulo: "", conteudo: "" });
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

      <h2>Cadastro de Notícias</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
        />
        <textarea
          name="conteudo"
          placeholder="Conteúdo da notícia"
          value={form.conteudo}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <h3>Notícias Cadastradas</h3>
      <ul>
        {noticias.map((n) => (
          <li key={n.id}>
            <strong>{n.titulo}</strong> - {n.conteudo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Noticias;
