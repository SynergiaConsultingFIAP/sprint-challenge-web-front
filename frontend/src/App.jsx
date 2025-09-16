import { Routes, Route } from "react-router-dom";
import ArenaDelas from "./components/ArenaDelas";
import Jogadoras from "./components/Jogadoras";
import Clubes from "./components/Clubes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArenaDelas />} />
      <Route path="/jogadoras" element={<Jogadoras />} />
      <Route path="/clubes" element={<Clubes />} />
    </Routes>
  );
}

export default App;
