import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import QuiSommes from './pages/QuiSommes';
import NosServices from './pages/NosServices';
import NosSolutions from './pages/NosSolutions';
import NosClients from './pages/NosClients';
import Contact from './pages/Contact';
import './index.css';


// diva easy

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/qui-sommes-nous" element={<QuiSommes />} />
              <Route path="/nos-services" element={<NosServices />} />
              {/* <Route path="/nos-solutions" element={<NosSolutions />} /> */}
              <Route path="/nos-clients" element={<NosClients />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
)
}

export default App;
