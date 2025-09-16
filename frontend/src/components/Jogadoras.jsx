import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="font-poppins min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header igual ao do ArenaDelas */}
      <header className="bg-purple-300 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="logo">
            <Link to="/">
              <img src="src/assets/logoArenaDelas.png" alt="Logo Arena Delas" className="h-12"/>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6 font-medium text-gray-800">
              <li>
                <Link to="/" className="hover:text-purple-600 transition duration-300">Início</Link>
              </li>
              <li>
                <Link to="/jogadoras" className="text-purple-600 border-b-2 border-purple-600 pb-1">Cadastro de Jogadoras</Link>
              </li>
              <li>
                <Link to="/noticias" className="hover:text-purple-600 transition duration-300">Notícias</Link>
              </li>
              <li>
                <Link to="/clubes" className="hover:text-purple-600 transition duration-300">Cadastro de Clubes</Link>
              </li>
              <li>
                <Link to="/comunidade" className="hover:text-purple-600 transition duration-300">Comunidade</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-700 text-white flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Título principal */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Encontre Jogadoras</h2>
            <p className="text-xl text-pink-100">Navegue pelos perfis e descubra o talento do futebol feminino.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário de cadastro */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-pink-300/30">
              <h3 className="text-2xl font-bold mb-6 text-center">É Jogadora? Cadastre-se!</h3>
              <p className="text-pink-100 mb-6 text-center">
                Crie seu perfil no Arena Delas, mostre seu talento para clubes de todo o Brasil e dê o próximo passo na sua carreira.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-pink-100 mb-2">Seu Nome</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                
                <div>
                  <label className="block text-pink-100 mb-2">Sua Posição Principal</label>
                  <input
                    type="text"
                    name="posicao"
                    placeholder="Ex: Atacante, Meia, Goleira"
                    value={form.posicao}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                
                <div>
                  <label className="block text-pink-100 mb-2">Seu Time</label>
                  <input
                    type="text"
                    name="time"
                    placeholder="Time atual"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                
                <div>
                  <label className="block text-pink-100 mb-2">Suas Principais Qualidades (separadas por vírgula)</label>
                  <input
                    type="text"
                    placeholder="Ex: velocidade, Drible, Finalização"
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                
                <div>
                  <label className="block text-pink-100 mb-2">Fale sobre você e sua carreira</label>
                  <textarea
                    rows="4"
                    className="w-full bg-white/20 border border-pink-300/50 rounded-lg px-4 py-3 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Conte um pouco sobre sua trajetória no futebol..."
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

            {/* Lista de jogadoras */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Jogadoras Cadastradas</h3>
              
              <div className="space-y-4">
                {jogadoras.length > 0 ? (
                  jogadoras.map(j => (
                    <div key={j.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300">
                      <h4 className="text-xl font-bold mb-2">{j.nome}</h4>
                      <div className="flex justify-between text-pink-100">
                        <span>{j.posicao}</span>
                        <span>{j.time}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-pink-200">
                    <p>Nenhuma jogadora cadastrada ainda.</p>
                    <p>Seja a primeira a se cadastrar!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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

export default Jogadoras;