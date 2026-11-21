import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/static/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Contato from "./pages/Contato/Contato"
import Servicos from "./pages/Servicos/Servicos"
import Orcamento from "./pages/Orcamento/Orcamento"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/servicos" element={<Servicos />} />

          <Route path="/orcamento" element={<Orcamento />} />

          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
