import{ useState, useEffect } from 'react';
import './topheader.css';
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
// import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import irtmacc from '../../assets/Irtmac.svg';
import { useTranslation  } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";

function Topheader() {
    const { i18n } = useTranslation();
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isMenuDropdownOpen, setMenuIsDropdownOpen] = useState(false);
    const [isMenuTwoDropdownOpen, setMenuTwoIsDropdownOpen] = useState(false);
    
    // const closeSearch = () => {
    //     setIsOpenSearch(false);  // Search inputu gizlədəcək
    // };
    const toggleDropdown = () => {
        setMenuIsDropdownOpen(!isMenuDropdownOpen);
    };
    const toggleDropdownTwo = () => {
        setMenuTwoIsDropdownOpen(!isMenuTwoDropdownOpen);
    };

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const handleClick = () => {
        setIsOpenSearch(true);
    };

    const closeSearch = () => {
        setIsOpenSearch(false);
    };

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
        if (isOpenMenu) {
            setMenuIsDropdownOpen(false);
            setMenuTwoIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isOpenMenu) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        };
    }, [isOpenMenu]);

    return (
        <div>
            <div className="TopHeader">
                {i18n.language==="ru"? <h1 className="topheader-text textru">
                    INTERNATIONAL 
                </h1>: <h1 className="topheader-text">
                    INTERNATIONAL RESEARCH TRAINING MEDICAL ASSEMBLY CENTER
                </h1>}
                {/* <h1 className="topheader-text">
                    INTERNATIONAL RESEARCH TRAINING MEDICAL ASSEMBLY CENTER
                </h1> */}
                <Link to="/">
                    <img src={irtmacc} alt="Irtmac" className="irtmac" style={{ width: '150px', display: 'none' }} />
                </Link>

                <div className="topheader-text d-flex ">
                    <div onClick={handleClick} className="me-4">
                        <CiSearch className="SearchIcon" />
                    </div>

                    <div className="vl"></div>
                    <select onChange={handleChange} defaultValue={i18n.language} >
                        <option value="az">AZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                    <GiHamburgerMenu size={24} color="white" />
                </div>
                </div>

           

                <div className={`menu-content ${isOpenMenu ? 'active' : ''}`}>
                    <div className="close-button" onClick={toggleMenu}>
                        <AiOutlineClose color="white" />
                    </div>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Ana Səhifə</Link></li>


                        <li className=" dropdown dropdown-2 nav-item" id='about'>
                        <Link className="nav nav-link" onClick={toggleDropdown} style={{padding:"0"}} >Haqqımızda
                        <span className={`dropdown-arrow ${isMenuDropdownOpen ? 'rotate' : ''}`}>
                        <AiOutlineDown />
                        </span></Link>
                        <div className={`Menu-dropdown-content ${isMenuDropdownOpen ? 'active' : ''}`}>
                            <Link className=" dropdown-item nav " onClick={toggleMenu}  to="/about">Rəhbərin Müraciəti</Link>
                            <Link className=" dropdown-item nav "  onClick={toggleMenu} to="/Questions">Ən çox verilən suallar</Link>
                            <Link className="dropdown-item  nav "  onClick={toggleMenu} to="/Mission">Missiya və Dəyərlər</Link>
                        </div>
                        </li>


                        <li><Link to="/Telimler" onClick={toggleMenu}>Təlimlər</Link></li>
                        <li><Link to="/Telimciler" onClick={toggleMenu}>Təlimçilər</Link></li>

                        <li className=" dropdown dropdown-2 nav-item" id='about'>
                            <Link className="nav nav-link" onClick={toggleDropdownTwo} style={{padding:"0"}} >Media Mərkəzi
                            <span className={`dropdown-arrow ${isMenuTwoDropdownOpen ? 'rotate' : ''}`}>
                            <AiOutlineDown />
                            </span></Link>
                            <div className={`Menu-dropdown-content ${isMenuTwoDropdownOpen ? 'active' : ''}`}>
                                <Link className=" dropdown-item nav " onClick={toggleMenu} to="/Media">KİV</Link>
                                <Link className=" dropdown-item nav " onClick={toggleMenu} to="/NewsPage">Xəbərlər</Link>
                            </div>
                        </li>
                        <li><Link to="/Contact" onClick={toggleMenu}>Əlaqə</Link></li>
                    </ul>
                </div>
            </div>

            {/* Search Input */}
            {/* <div className={`row m-0 header-search ${isOpenSearch && 'active'}`}>
                <AiOutlineSearch className="search-icon-lop" />
                <input type="text" placeholder="Search..." />
                Close Icon to close the search
                {isOpenSearch && (
                    <AiOutlineClose className="close" onClick={closeSearch} />
                )}
            </div> */}

            <div className={`row m-0 header-search ${isOpenSearch && 'active'}`}>
            {isOpenSearch && (
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
            )}
            {/* CSS ilə background-ı qoyub, onClick ilə input-u bağlamaq */}
            {isOpenSearch && (
                <div className="close-icon" onClick={closeSearch}></div>
            )}
        </div>
        </div>
    );
}

export default Topheader;
