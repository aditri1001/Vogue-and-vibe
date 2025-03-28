import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Model from "./pages/model"
import Portfolio from './pages/portfolio'
import SectionPage from './pages/SectionPage'
import Contact from './pages/Contact'
import ModelGallery from './pages/ModelGallery'
import NotFound from './pages/NotFound'

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
