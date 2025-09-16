import { Link } from "react-router-dom";

function Noticias() {
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
                <Link
                  to="/noticias"
                  className="text-purple-600 border-b-2 border-purple-600 pb-1"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/clubes" className="hover:text-purple-600 transition duration-300">
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
            <h2 className="text-4xl font-bold mb-4">Notícias do Futebol Feminino</h2>
            <p className="text-xl text-pink-100">
              Fique por dentro de tudo que acontece no mundo do futebol feminino
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Seleção Brasileira
                </span>
                <span className="text-pink-200 text-sm">2 de Junho de 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Seleção Brasileira é convocada para a Copa do Mundo Feminina
              </h3>
              <p className="text-pink-100">
                A técnica Pia Sundhage anunciou as 23 jogadoras que representarão o Brasil
                na Copa do Mundo Feminina 2023. A lista inclui grandes nomes como Marta,
                Debinha e Andressa Alves.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Competições
                </span>
                <span className="text-pink-200 text-sm">30 de Julho de 2022</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Brasil vence a Argentina e conquista a Copa América Feminina
              </h3>
              <p className="text-pink-100">
                Em uma partida histórica, a seleção brasileira feminina venceu a Argentina
                por 4-0 e conquistou o título da Copa América. Foi a 8ª conquista do Brasil
                no torneio.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Recordes
                </span>
                <span className="text-pink-200 text-sm">18 de Junho de 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Marta se torna maior artilheira da história das Copas do Mundo
              </h3>
              <p className="text-pink-100">
                A rainha Marta marcou seu 17º gol em Copas do Mundo e se tornou a maior
                artilheira da história da competição, superando o alemão Miroslav Klose.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Campeonato Nacional
                </span>
                <span className="text-pink-200 text-sm">10 de Outubro de 2022</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Campeonato Brasileiro Feminino bate recorde de público
              </h3>
              <p className="text-pink-100">
                O clássico entre Corinthians e Palmeiras reuniu mais de 38 mil pessoas no
                estádio Neo Química Arena, marcando novo recorde de público do futebol
                feminino brasileiro.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Copa do Mundo
                </span>
                <span className="text-pink-200 text-sm">25 de Junho de 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Copa do Mundo 2027 será na Austrália e Nova Zelândia
              </h3>
              <p className="text-pink-100">
                A FIFA confirmou que a próxima Copa do Mundo Feminina será realizada na
                Austrália e Nova Zelândia, prometendo ser a maior edição da história do
                torneio.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-pink-300/30 hover:bg-white/15 transition duration-300">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Torneios Independentes
                </span>
                <span className="text-pink-200 text-sm">15 de Setembro de 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Copa Passa a Bola de Ale Oliveira movimenta o cenário do futebol feminino
              </h3>
              <p className="text-pink-100">
                A jornalista e criadora de conteúdo Ale Oliveira lançou a Copa Passa a Bola,
                um torneio dedicado a promover maior visibilidade para o futebol feminino no
                Brasil. O campeonato reúne equipes de várias regiões e busca incentivar novas
                gerações de atletas, com transmissão digital e ampla participação da
                comunidade.
              </p>
            </div>
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

export default Noticias;