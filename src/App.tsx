import { HashRouter, Routes, Route } from 'react-router-dom'
import CRTOverlay from './components/CRTOverlay'
import ParticleField from './components/ParticleField'
import NavBar from './components/NavBar'
import Footer from './sections/Footer'
import Home from './pages/Home'
import Dossier from './pages/Dossier'
import Archive from './pages/Archive'
import ConnectPage from './pages/ConnectPage'

export default function App() {
  return (
    <HashRouter>
      <div className="relative min-h-screen bg-void">
        <ParticleField />
        <CRTOverlay />
        <div className="relative z-10">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dossier" element={<Dossier />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/connect" element={<ConnectPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  )
}
