import { useEffect, useState } from "react";

function ArenaDelas() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/arenaDelas", { method: "POST" })
      .then(res => res.json())
      .then(data => setMensagem(data.message))
      .catch((err) => console.error("Erro ao buscar backend:", err));
  }, []);

  return (
    <div className="font-poppins min-h-screen flex flex-col bg-white text-gray-900">
      <header className="bg-purple-300 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="logo">
            <a href="#">
              <img src="src/assets/logoArenaDelas.png" alt="Logo Arena Delas" className="h-12"/>
            </a>
          </div>
          <nav>
            <ul className="flex space-x-6 font-medium text-gray-800">
              <li><a href="#" className="text-purple-600 border-b-2 border-purple-600 pb-1">Início</a></li>
              <li><a href="#" className="hover:text-purple-600 transition duration-300">Jogadoras</a></li>
              <li><a href="#" className="hover:text-purple-600 transition duration-300">Notícias</a></li>
              <li><a href="#" className="hover:text-purple-600 transition duration-300">Clubes</a></li>
              <li><a href="#" className="hover:text-purple-600 transition duration-300">Comunidade</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="bg-gradient-to-b from-purple-500 to-purple-300 text-white py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Arena Delas</h1>
          <p className="text-xl md:text-2xl mb-8">
            A plataforma definitiva para conectar, celebrar e impulsionar o futebol feminino.
          </p>
          <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            ENCONTRE TALENTOS
          </a>
        </div>
      </section>
      <section className="py-20 bg-white flex-1">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Conheça a Plataforma</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-gradient-to-b from-pink-400 to-pink-400 text-white rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <img src="src/assets/icon-player.png" alt="Ícone Jogadora" className="mx-auto mb-4 h-16"/>
              <h3 className="text-xl font-semibold mb-2">Perfis de Atletas</h3>
              <p>Jogadoras podem criar perfis detalhados, mostrando suas habilidades, histórico e paixão pelo esporte.</p>
            </div>

            <div className="bg-gradient-to-b from-pink-400 to-pink-400 text-white rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <img src="src/assets/icon-news.png" alt="Ícone Notícias" className="mx-auto mb-4 h-16"/>
              <h3 className="text-xl font-semibold mb-2">Notícias e Análises</h3>
              <p>Fique por dentro de tudo que acontece no mundo do futebol feminino com cobertura exclusiva.</p>
            </div>

            <div className="bg-gradient-to-b from-pink-400 to-pink-400 text-white rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <img src="src/assets/icon-club.png" alt="Ícone Clube" className="mx-auto mb-4 h-16"/>
              <h3 className="text-xl font-semibold mb-2">Vitrine para Clubes</h3>
              <p>Clubes podem se cadastrar para descobrir e recrutar as próximas estrelas do futebol.</p>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 text-center">
        <p className="text-lg text-gray-900">{mensagem}</p>
      </section>
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
  )
}

export default ArenaDelas;
