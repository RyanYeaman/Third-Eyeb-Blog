import './styles/App.css';
import Navbar from './components/navComponents/Navbar';
import HomePage from './components/homeComponents/HomePage'
import Footer from './components/footerComponent/Footer';
import { Routes, Route } from 'react-router-dom'
import ArticalPage from './components/articalComponents/ArticalPage';
import AboutPage from './components/aboutPage/AboutPage';
import ContactPage from './components/contactComponents/ContactPage';

 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articals' element={<ArticalPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
        <Footer />
    </div >
  );
}

export default App;
