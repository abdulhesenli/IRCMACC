import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header.jsx";

// import Home from './components/home/Home';
// import About from './components/About/About';
// import Footer from "./components/Footer/Footer"
// import Telimler from "./components/Telimler/Telimler"
// import Telimciler from './components/Telimciler/Telimciler';
// import Media from './components/Media/Media';
// import Contact from './components/Contact/Contact';
// import Error from './components/error/Error';
// import Questions from './components/Questions/Questions';
// import Mission from './components/Mission/Mission';

function App() {
  return (
    <div>

        <Header/>



      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div> */}
   
  
    </div>
  );
}

export default App;
