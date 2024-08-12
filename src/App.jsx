import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Footer from "./components/Footer/Footer"
import Telimler from "./components/Telimler/Telimler"
import Telimciler from './components/Telimciler/Telimciler';
import Media from './components/Media/Media';
import Contact from './components/Contact/Contact';
import Error from './components/error/Error';
import Questions from './components/Questions/Questions';
import Mission from './components/Mission/Mission';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Telimler" element={<Telimler />} />
        <Route path="/Telimciler" element={<Telimciler />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="*" element={<Error />} />
      </Routes>


      <Footer /> 
    </div>
  );
}

export default App;
