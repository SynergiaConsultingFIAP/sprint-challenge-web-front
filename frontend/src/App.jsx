import { Routes, Route } from "react-router-dom";
import ArenaDelas from "./components/ArenaDelas";
import Jogadoras from "./components/Jogadoras";
import Clubes from "./components/Clubes";
import Noticias from "./components/Noticias";
import Comunidade from "./components/Comunidade";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArenaDelas />} />
      <Route path="/jogadoras" element={<Jogadoras />} />
      <Route path="/clubes" element={<Clubes />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/comunidade" element={<Comunidade />} />
    </Routes>
  );
}

export default App;
