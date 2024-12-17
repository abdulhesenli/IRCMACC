
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import irtmac from '../assets/Irtmac.svg'
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";







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

                                <Link className="nav nav-link" > {t('about')}</Link>
                                <div className="dropdown-content dropdown-menu dropdown-menu-white">
                                    <Link className=" dropdown-item nav " to="/about">{t('leaders address')}</Link>
                                    <Link className=" dropdown-item nav " to="/Questions"> {t('frequently asked questions')}</Link>
                                    <Link className="dropdown-item  nav " to="/Mission"> {t('mission and values')}</Link>
                             
                                </div>


                            </li>
                            <li className="nav-item">
                                <Link className="nav nav-link" to="/Telimler">{t('trainings')}</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav nav-link" to="/Telimciler">{t('trainers')} </Link>
                            </li>
                            <li className=" dropdown dropdown-2 nav-item">
                                <Link className="nav nav-link">{t('media center')}</Link>
                                <div className="dropdown-content dropdown-menu dropdown-menu-white">
                                    <Link className="nav " to="/Media"> {t('media')}</Link>
                                    <Link className="nav " to="/Newspage">{t('news')} </Link>
                                    
                         
                                </div>

                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav nav-link" to="/Contact">{t('contact')}</Link>
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

