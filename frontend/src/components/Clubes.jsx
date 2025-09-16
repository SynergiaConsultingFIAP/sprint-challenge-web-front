import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Clubes() {
  const [clubes, setClubes] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    cidade: "",
    estado: "",
    email: "",
    telefone: "",
    descricao: ""
  });

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
          setClubes([...clubes, data.clube]);
          setForm({
            nome: "",
            cidade: "",
            estado: "",
            email: "",
            telefone: "",
            descricao: ""
          });
        } else {
          alert(data.error);
        }
      });
  };

  return (
    <div className="font-poppins min-h-screen flex flex-col bg-white text-gray-900">
      <header className="bg-purple-300 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="logo">
            <Link to="/">
              <img
                src="src/assets/logoArenaDelas.png"
                alt="Logo Arena Delas"
                className="h-12"
              />
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6 font-medium text-gray-800">
              <li>
                <Link to="/" className="hover:text-purple-600 transition duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/jogadoras" className="hover:text-purple-600 transition duration-300">
                  Cadastro de Jogadoras
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="hover:text-purple-600 transition duration-300">
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  to="/clubes"
                  className="text-purple-600 border-b-2 border-purple-600 pb-1"
                >
                  Cadastro de Clubes
                </Link>
              </li>
              <li>
                <Link to="/comunidade" className="hover:text-purple-600 transition duration-300">
                  Comunidade
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-700 text-white flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Cadastre seu Clube</h2>
            <p className="text-xl text-pink-100">
              Crie o perfil do seu clube e conecte-se a jogadoras de todo o Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-pink-300/30">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Cadastro de Clube
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-pink-100 mb-2">Nome do Clube</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome do clube"
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-pink-100 mb-2">Cidade</label>
                  <input
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    value={form.cidade}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-pink-100 mb-2">Estado</label>
                  <input
                    type="text"
                    name="estado"
                    placeholder="Estado"
                    value={form.estado}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-pink-100 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail de contato"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-pink-100 mb-2">Telefone</label>
                  <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-pink-100 mb-2">Descrição do Clube</label>
                  <textarea
                    name="descricao"
                    rows="4"
                    placeholder="Conte sobre o clube"
                    value={form.descricao}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Cadastrar
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Clubes Cadastrados</h3>
              <div className="space-y-4">
                {clubes.length > 0 ? (
                  clubes.map((c) => (
                    <div
                      key={c.id}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300"
                    >
                      <h4 className="text-xl font-bold mb-2">{c.nome}</h4>
                      <div className="flex justify-between text-pink-100">
                        <span>{c.cidade} - {c.estado}</span>
                        <span>{c.email}</span>
                      </div>
                      {c.telefone && (
                        <p className="mt-2 text-pink-100 text-sm">
                          <strong>Telefone:</strong> {c.telefone}
                        </p>
                      )}
                      {c.descricao && (
                        <p className="mt-1 text-pink-100 text-sm">
                          <strong>Descrição:</strong> {c.descricao}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-pink-200">
                    <p>Nenhum clube cadastrado ainda.</p>
                    <p>Cadastre o seu agora!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-purple-900 text-white py-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>&copy; 2025 Arena Delas. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-500 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-pink-500 transition duration-300">Instagram</a>
            <a href="#" className="hover:text-pink-500 transition duration-300">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Clubes;