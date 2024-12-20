import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {setLoading} from "./store/Slice/ui.js";
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx'
import Telimler from "./components/Telimler/Telimler.jsx"
import Telimciler from './components/Telimciler/Telimciler.jsx';
import Media from './components/Media/Media.jsx';
import Contact from './components/Contact/Contact.jsx';
import Error from './components/error/Error.jsx';
import Questions from './components/Questions/Questions.jsx';
import Newspage from './components/NewsPage/Newspage.jsx';
import Mission from './components/Mission/Mission.jsx';
import Loading from "./components/Ui/Loading.jsx";
import Topheader from './components/Topheader/Topheader.jsx';
import Header from './components/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx'
import Telimcidaxili from './components/Telimcidaxili/Telimcidaxili.jsx'
import Telimdaxili from './components/Telimler daxili/Telimdaxili.jsx'
import Searchresult from './components/searchresult/SearchResult.jsx';
import InsideNews from "./components/InsideNews/Insidenews.jsx";




function App() {
    const {loading} = useSelector((state)=>state.uiSlice);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setLoading(true));
        setTimeout(()=>{console.log('App component rendered');
        console.log('Loading state:', loading);
            dispatch(setLoading(false));
        }, 1000)
    }, []);

    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
                  <Route path="/Newspage" element={<Newspage/>}/>
                  <Route path="/InsideNews/:id" element={<InsideNews/>}/>
                  <Route path="/telimciler/:id" element={<Telimcidaxili/>}/>
                  <Route path="/telimler/:id" element={<Telimdaxili/>}/>
                  <Route path="/search-result" element={<Searchresult/>}/>
                  <Route path="*" element={<Error/>}/>
              </Routes>

              
           
              <Footer/>

  
            
          </div>
      </>

  );
}

export default App;
