// import React from "react";
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CiSearch} from "react-icons/ci";
import irtmac from '../assets/Irtmac.svg'
// import { Link } from 'react-router-dom';
// import Home from "./home/Home.jsx";
// import InsideNews from './İnsideNews/insidenews';
// import Fouter from './Footer/Footer.jsx'
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";
// import { Link,  } from 'react-router-dom';

// import TelimDaxili from './Telimler daxili/telimdaxili';
// import Telimci from './Telimciler/telimciler'
// import TelimciDaxili from './Telimcidaxili/telimcidaxili';

// import Media from './Media/media'


function Header() {
    const {t, i18n} = useTranslation();

    const handleChange = (e) => {
        {
            i18n.changeLanguage(e.target.value)
        }
    }

    return (

        <div>
            <div className="header row m-0">
                <div className="text col-6">INTERNATIONAL RESEARCH TRAINING MEDICAL ASSEMBLY CENTER</div>

                <div className=" h-text col-6 d-flex">

                    <div className="me-2">< CiSearch className="fa"/></div>
                    {/* <input type="text" name="text" id="text"  /> */}

                    <div className="vl"></div>
                    <select onChange={handleChange} name="" id="">
                        <option value="az">AZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>

            </div>

            <div className=" header-nav navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"><img src={irtmac} alt="Irtmac" className="irtmac"/></Link>
                    {/* <img src={irtmac}  alt="Irtmac" className="irtmac" /> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a  id="navlink"  className=" nav nav-link" aria-current="page" href="#">ANA SƏHİFƏ</a> */}
                                <Link className=" nav nav-link" to="/">ANA SƏHİFƏ</Link>
                            </li>
                            <li className=" dropdown dropdown-2 nav-item" id='about'>

                                {/* <a className=" nav nav-link" href="#">HAQQIMIZDA</a> */}
                                <Link className="nav nav-link" to="/about">HAQQIMIZDA</Link>
                                <div className="dropdown-content">
                                    <Link className="nav nav-link" to="/Questions">Ən çox verilən suallar</Link>
                                    <Link className="nav nav-link" to="/Mission">Missiya və Dəyərlər</Link>

                                    <a href="#">History</a>
                                </div>


                            </li>
                            <li className="nav-item">
                                {/* <a className=" nav nav-link" href="#">TƏLİM</a> */}
                                <Link className="nav nav-link" to="/Telimler">TƏLİMLƏR</Link>

                            </li>
                            <li className="nav-item">
                                {/* <a className=" nav nav-link" href="#">TƏLİMÇİLƏR</a> */}
                                <Link className="nav nav-link" to="/Telimciler">TƏLİMÇİLƏR</Link>
                            </li>
                            <li className=" nav nav-item">
                                {/* <a className=" nav nav-link" href="#">MEDİA MƏRKƏZİ</a> */}
                                <Link className="nav nav-link" to="/Media">MEDİA MƏRKƏZİ</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className=" nav nav-link" href="#">ƏLAQƏ</a> */}
                                <Link className="nav nav-link" to="/Contact">ƏLAQƏ</Link>
                            </li>


                        </ul>
                        <button className=" btn-1 btn btn-light" type="submit">SƏRHƏDSİZ CƏRRAHİYYƏ</button>
                        <button className="btn-2 btn btn-dark" type="submit">{t('register')}</button>

                    </div>
                </div>
            </div>
            {/* <InsideNews/>   */}
            {/* <TelimDaxili/>  */}
            {/* <Telimci/>  */}
            {/* <TelimciDaxili/>  */}


        </div>


    )
}

export default Header

