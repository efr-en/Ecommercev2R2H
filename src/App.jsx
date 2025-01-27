import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import FooterComponent from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <Router>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* Footer */}
      <FooterComponent />

    </Router>
  );
};

export default App;
