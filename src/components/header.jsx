// import React from "react";
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import irtmac from '../assets/Irtmac.svg'
import Home from "./home/home.jsx";




function Header(){
    return(

 <div>
           <div className="header row">
           <div className="text col-6">INTERNATIONAL RESEARCH TRAINING MEDICAL ASSEMBLY CENTER</div>

           <div className=" h-text col-6 d-flex">
           <div className="me-2">< CiSearch className="fa" /></div>
           <div className="vl"></div>
                 <p className="text">AZ</p>
           </div>
           
           </div>

           <nav className=" header-nav navbar navbar-expand-lg bg-body-tertiary">
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
                                   <a className=" nav nav-link" href="#">HAQQIMIZDA</a>
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
            </nav>

<Home/>
         

 </div>

      

    )
}

export default Header

