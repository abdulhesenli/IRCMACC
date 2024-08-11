// import React from "react";
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import irtmac from '../assets/Irtmac.svg'
// import { Link } from 'react-router-dom';
import Home from "./home/home.jsx";
// import InsideNews from './İnsideNews/insidenews';
import Fouter from './Footer/footer.jsx'
// import { Link,  } from 'react-router-dom';

// import TelimDaxili from './Telimler daxili/telimdaxili';
// import Telimci from './Telimciler/telimciler'
// import TelimciDaxili from './Telimcidaxili/telimcidaxili';

// import Media from './Media/media'







function Header(){
    return(

    <div>
           <div className="header row">
           <div className="text col-6">INTERNATIONAL RESEARCH TRAINING MEDICAL ASSEMBLY CENTER</div>

           <div className=" h-text col-6 d-flex">
      
           <div className="me-2">< CiSearch className="fa" /></div>
           {/* <input type="text" name="text" id="text"  /> */}
           
           <div className="vl"></div>
                 <p className="text">AZ</p>
           </div>
           
           </div>

           <div className=" header-nav navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                 <img src={irtmac}  alt="Irtmac" className="irtmac" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                   <a  id="navlink"  className=" nav nav-link" aria-current="page" href="#">ANA SƏHİFƏ</a>
                                </li>
                                 <li className="nav-item">
                                  {/* <Link to='/about' className=" nav nav-link" >HAQQIMIZDA</Link> */}
                                   <a className=" nav nav-link" href="#">HAQQIMIZDA</a>
                                   {/* <Link to='/about' >HAQQIMIZDA</Link> */}
                                 </li>
                                 <li className="nav-item">
                                   <a className=" nav nav-link" href="#">TƏLİM</a>
                                 </li>
                                 <li className="nav-item">
                                   <a className=" nav nav-link" href="#">TƏLİMÇİLƏR</a>
                                 </li>
                                 <li className=" nav nav-item">
                                   <a className=" nav nav-link" href="#">MEDİA MƏRKƏZİ</a>
                                 </li>
                                 <li className="nav-item">
                                   <a className=" nav nav-link" href="#">ƏLAQƏ</a>
                                 </li>
                                 
                                     
                                     </ul>
                             <button className=" btn-1 btn btn-light" type="submit">SƏRHƏDSİZ CƏRRAHİYYƏ</button>
                                 <button className="btn-2 btn btn-dark" type="submit">QEYDİYYAT</button>
   
             </div>
             </div>
            </div>
      {/* <InsideNews/>   */}
      {/* <TelimDaxili/>  */}
      {/* <Telimci/>  */}
      {/* <TelimciDaxili/>  */}
   
      { <Home/>}
      <Fouter/>
         

    </div>

      

  )
 }

 export default Header

