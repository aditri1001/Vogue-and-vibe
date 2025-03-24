import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Model from "./pages/Model"
import Portfolio from './pages/Portfolio'
import SectionPage from './pages/SectionPage'
import Contact from './pages/Contact'
import ModelGallery from './pages/ModelGallery'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/section-page" element={<SectionPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/model-gallery" element={<ModelGallery />} />
      </Routes>
    </Router>
  )
}

export default App
