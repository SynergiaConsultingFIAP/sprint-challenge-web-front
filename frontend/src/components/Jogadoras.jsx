import { useEffect, useState } from "react";

function Jogadoras() {
  const [jogadoras, setJogadoras] = useState([]);
  const [form, setForm] = useState({ nome: "", posicao: "", time: "" });

  useEffect(() => {
    fetch("http://localhost:3001/jogadoras")
      .then(res => res.json())
      .then(data => setJogadoras(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/jogadoras", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setJogadoras([...jogadoras, data.player]);
          setForm({ nome: "", posicao: "", time: "" });
        } else {
          alert(data.error);
        }
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Jogadoras</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="posicao"
          placeholder="Posição"
          value={form.posicao}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={form.time}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">
          Cadastrar
        </button>
      </form>

      <ul className="space-y-2">
        {jogadoras.map(j => (
          <li key={j.id} className="p-3 bg-gray-100 rounded shadow">
            <strong>{j.nome}</strong> - {j.posicao} ({j.time})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jogadoras;