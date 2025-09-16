import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Comunidade() {
  const [foruns, setForuns] = useState([]);
  const [enquete, setEnquete] = useState(null);
  const [voto, setVoto] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/foruns")
      .then((res) => res.json())
      .then((data) => setForuns(data));

    fetch("http://localhost:3001/enquete")
      .then((res) => res.json())
      .then((data) => setEnquete(data));
  }, []);

  const handleVoto = (opcao) => {
    setVoto(opcao);
    alert(`Você votou em: ${opcao}`);
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
                <Link to="/clubes" className="hover:text-purple-600 transition duration-300">
                  Cadastro de Clubes
                </Link>
              </li>
              <li>
                <Link
                  to="/comunidade"
                  className="text-purple-600 border-b-2 border-purple-600 pb-1"
                >
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
            <h2 className="text-4xl font-bold mb-4">Comunidade</h2>
            <p className="text-xl text-pink-100">
              Participe dos fóruns e dê sua opinião nas enquetes!
            </p>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Fóruns Ativos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {foruns.length > 0 ? (
                foruns.map((f) => (
                  <div
                    key={f.id}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300"
                  >
                    <h4 className="text-xl font-bold mb-2">{f.titulo}</h4>
                    <p className="text-pink-100 mb-3">{f.descricao}</p>
                    <span className="text-sm text-pink-200">
                      {f.topicos} tópicos em discussão
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center text-pink-200 col-span-2">
                  Nenhum fórum disponível no momento.
                </p>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Enquete da Semana</h3>
            {enquete ? (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-pink-300/30 max-w-2xl mx-auto">
                <p className="text-xl mb-6">{enquete.pergunta}</p>
                <div className="space-y-4">
                  {enquete.opcoes.map((opcao, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleVoto(opcao)}
                      className={`w-full px-4 py-3 rounded-lg font-medium transition duration-300 ${
                        voto === opcao
                          ? "bg-pink-600 text-white"
                          : "bg-white/20 text-pink-100 hover:bg-pink-600 hover:text-white"
                      }`}
                    >
                      {opcao}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-center text-pink-200">Carregando enquete...</p>
            )}
          </div>
        </div>
      </div>
      <footer className="bg-purple-900 text-white py-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>&copy; 2025 Arena Delas. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-500 transition duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              Instagram
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Comunidade;