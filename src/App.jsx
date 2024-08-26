import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from "./pages/Skills";
function App() {
  

  return (
  <div className="App">
   <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </Router>
  </div>
  )
}

export default App
