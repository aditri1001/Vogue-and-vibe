import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Model from "./pages/model"
import Portfolio from './pages/portfolio'
import Photographers from './pages/SectionPage'
import About from './pages/About'
import ModelGallery from './pages/ShowModel'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/about" element={<About />} />
        <Route path="/modelGallery" element={<ModelGallery />} />
      </Routes>
    </Router>
  )
}

export default App
