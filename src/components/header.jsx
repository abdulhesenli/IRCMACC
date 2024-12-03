// import React from "react";
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import irtmac from '../assets/Irtmac.svg'
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";
// import Home from './home/Home';
// import {useState} from "react";






function Header() {
    const {t} = useTranslation();

    return (

        <div>
            
           


                <div className="header-nav">
                    <div> <Link to="/"><img src={irtmac} alt="Irtmac" className="irtmac" style={{width:'150px'}}/></Link></div>
                    <div id="navbar">
                        <ul>
                            <li className="nav-item">
                                <Link className=" nav nav-link" to="/"> {t('home')} </Link>
                            </li>
                            <li className=" dropdown dropdown-2 nav-item" id='about'>

                                <Link className="nav nav-link" >HAQQIMIZDA</Link>
                                <div className="dropdown-content dropdown-menu dropdown-menu-white">
                                    <Link className=" dropdown-item nav " to="/about">Rəhbərin Müraciəti</Link>
                                    <Link className=" dropdown-item nav " to="/Questions">Ən çox verilən suallar</Link>
                                    <Link className="dropdown-item   nav " to="/Mission">Missiya və Dəyərlər</Link>
                             
                                </div>


                            </li>
                            <li className="nav-item">
                                <Link className="nav nav-link" to="/Telimler">TƏLİMLƏR</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav nav-link" to="/Telimciler">TƏLİMÇİLƏR</Link>
                            </li>
                            <li className=" dropdown dropdown-2 nav-item">
                                <Link className="nav nav-link">MEDİA MƏRKƏZİ</Link>
                                <div className="dropdown-content dropdown-menu dropdown-menu-white">
                                    <Link className="nav " to="/Media">KİV</Link>
                                    <Link className="nav " to="/NewsPage">Xəbərlər</Link>
                                    
                         
                                </div>

                                
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

