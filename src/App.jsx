import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Camere from './pages/Camere'
import Ristorante from './pages/Ristorante'
import Prenota from './pages/Prenota'
import Contatti from './pages/Contatti'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camere" element={<Camere />} />
            <Route path="/ristorante" element={<Ristorante />} />
            <Route path="/prenota" element={<Prenota />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
  )
}

export default App