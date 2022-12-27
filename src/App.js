import './styles/App.css';
import HomePage from './components/homeComponents/HomePage'
import Footer from './components/footerComponent/Footer';
import { Routes, Route } from 'react-router-dom'
import ArticalPage from './components/articalComponents/ArticalPage';
import AboutPage from './components/aboutPage/AboutPage';
import ContactPage from './components/contactComponents/ContactPage';
import { useState } from 'react';
import BlogPost1 from './components/BlogPostComponents/BlogPost1';

 
function App() {
  const [navStyle, setNavStyle] = useState("normalStyle")
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage navStyle={navStyle} setNavStyle={setNavStyle}/>} />
        <Route path='/articals' element={<ArticalPage navStyle={navStyle} setNavStyle={setNavStyle}/>} />
        <Route path='/about' element={<AboutPage navStyle={navStyle} setNavStyle={setNavStyle}/>} />
        <Route path='/contact' element={<ContactPage navStyle={navStyle} setNavStyle={setNavStyle}/>} />
        <Route path='/BlogPost1' element={<BlogPost1 navStyle={navStyle} setNavStyle={setNavStyle}/>} />
      </Routes>
        <Footer />
    </div >
  );
}

export default App;
