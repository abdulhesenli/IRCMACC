import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {setLoading} from "./store/Slice/ui.js";
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/footer.jsx'
import Telimler from "./components/Telimler/telimler.jsx"
import Telimciler from './components/Telimciler/telimciler.jsx';
import Media from './components/Media/media.jsx';
import Contact from './components/Contact/contact.jsx';
import Error from './components/error/error.jsx';
import Questions from './components/Questions/questions.jsx';
import NewsPage from './components/NewsPage/newspage.jsx';
import Mission from './components/Mission/mission.jsx';
import Loading from "./components/Ui/Loading.jsx";
import Topheader from './components/Topheader/Topheader.jsx';
import Header from './components/header.jsx';
import Home from './components/home/home.jsx';
import About from './components/About/about.jsx'
import InsideNews from './components/İnsideNews/insidenews.jsx';
import Telimcidaxili from './components/Telimcidaxili/telimcidaxili.jsx'
import Telimdaxili from './components/Telimler daxili/telimdaxili.jsx'




function App() {
    const {loading} = useSelector((state)=>state.uiSlice);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(setLoading(true));
        setTimeout(()=>{console.log('App component rendered');
        console.log('Loading state:', loading);
            dispatch(setLoading(false));
        }, 1000)
    }, [])

  return (
      <>
          {loading &&  <Loading/>}
          {/* <MouseTracker/> */}
          <div>

                 <div  id='topheader' style={{backgroundColor:'#002D74', height:'60px'}}>
                 <Topheader/>
                 </div>
                 <div  id='topheader' style={{backgroundColor:'#009ADE', borderRadius:'0 0 20px 20px'}}>
                    <Header/>
                   
                </div>

           
             
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/telimler" element={<Telimler/>}/>
                  <Route path="/telimciler" element={<Telimciler/>}/>
                  <Route path="/Media" element={<Media/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/Questions" element={<Questions/>}/>
                  <Route path="/Mission" element={<Mission/>}/>
                  <Route path="/NewsPage" element={<NewsPage/>}/>
                  <Route path="/InsideNews" element={<InsideNews/>}/>
                  <Route path="/Telimcidaxili" element={<Telimcidaxili/>}/>
                  <Route path="/Telimdaxili" element={<Telimdaxili/>}/>
                  <Route path="*" element={<Error/>}/>
              </Routes>
           
              <Footer/>

  
            
          </div>
      </>

  );
}

export default App;
