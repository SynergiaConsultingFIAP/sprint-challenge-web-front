import { Routes, Route } from "react-router-dom";
import ArenaDelas from "./components/ArenaDelas";
import Jogadoras from "./components/Jogadoras";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArenaDelas />} />
      <Route path="/jogadoras" element={<Jogadoras />} />
    </Routes>
  );
}

export default App;
