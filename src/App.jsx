import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './components/home/home.jsx';
import About from './components/About/about.jsx';
import Footer from "./components/Footer/footer.jsx"
import Telimler from "./components/Telimler/telimler.jsx"
import Telimciler from './components/Telimciler/telimciler.jsx';
import Media from './components/Media/media.jsx';
import Contact from './components/Contact/contact.jsx';
import Error from './components/error/error.jsx';
import Questions from './components/Questions/questions.jsx';
import Mission from './components/Mission/mission.jsx';
import Loading from "./components/Ui/Loading.jsx";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {setLoading} from "./store/Slice/ui.js";

function App() {
    const {loading} = useSelector((state)=>state.uiSlice);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(setLoading(true));
        setTimeout(()=>{
            dispatch(setLoading(false));
        }, 1000)
    }, [])

  return (
      <>
          {loading &&  <Loading/>}
          <div>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/telimler" element={<Telimler/>}/>
                  <Route path="/Telimciler" element={<Telimciler/>}/>
                  <Route path="/Media" element={<Media/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/Questions" element={<Questions/>}/>
                  <Route path="/Mission" element={<Mission/>}/>
                  <Route path="*" element={<Error/>}/>
              </Routes>
              <Footer/>
          </div>
      </>

  );
}

export default App;
