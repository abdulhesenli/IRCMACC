// import React from "react";
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import irtmac from '../assets/Irtmac.svg'
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";
// import {useState} from "react";





function Header() {
    const {t} = useTranslation();

    return (

        <div>
            
           


            <div className=" header-nav">
                    <div>
                    <Link to="/"><img src={irtmac} alt="Irtmac" className="irtmac" style={{width:'150px'}}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    {/* className="collapse navbar-collapse"  */}
                    <div id="navbar">
                    {/* className="navbar-nav me-auto mb-2 mb-lg-0" */}
                    <ul >
                            <li className="nav-item">
                                <Link className=" nav nav-link" to="/">ANA SƏHİFƏ</Link>
                            </li>
                            <li className=" dropdown dropdown-2 nav-item" id='about'>

                                <Link className="nav nav-link" to="/about">HAQQIMIZDA</Link>
                                <div className="dropdown-content dropdown-menu dropdown-menu-white">
                                    <Link className="nav nav-link" to="/Questions">Ən çox verilən suallar</Link>
                                    <Link className="dropdown-item   nav nav-link" to="/Mission">Missiya və Dəyərlər</Link>
                                    

                                    <a href="#">History</a>
                                </div>


                            </li>
                            <li className="nav-item">
                                <Link className="nav nav-link" to="/Telimler">TƏLİMLƏR</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav nav-link" to="/Telimciler">TƏLİMÇİLƏR</Link>
                            </li>
                            <li className=" nav nav-item">
                                <Link className="nav nav-link" to="/Media">MEDİA MƏRKƏZİ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav nav-link" to="/Contact">ƏLAQƏ</Link>
                            </li>


                        </ul>
                    </div>

                    <div id='HeaderBtn'>
                       
                        <button className=" btn-1 btn btn-light" type="submit">SƏRHƏDSİZ CƏRRAHİYYƏ</button>
                        <button className="btn-2 btn btn-dark" type="submit">{t('register')}</button>

                    </div>
               
            </div>
         


        </div>


    )
}

export default Header

