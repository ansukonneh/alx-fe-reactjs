import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Contact from   './components/contact.jsx'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App