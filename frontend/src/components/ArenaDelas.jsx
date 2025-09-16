import { useEffect, useState } from "react"

function ArenaDelas() {
  const [mensagem, setMensagem] = useState("");

useEffect(() => {
    fetch("http://localhost:3001/arenaDelas", { method: "POST" })
      .then(res => res.json())
      .then(data => setMensagem(data.message))
      .catch((err) => console.error("Erro ao buscar backend:", err));
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Arena Delas</h1>
      <p className="mt-4 text-lg">{mensagem}</p>
    </div>
  )
}

export default ArenaDelas