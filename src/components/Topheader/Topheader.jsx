import React, { useState, useEffect } from 'react';
import './topheader.css';
import '../../res.css'
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import irtmacc from '../../assets/Irtmac.svg';
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";

function Topheader() {
    const { i18n } = useTranslation();
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

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
                <h1 className="topheader-text">
                    INTERNATIONAL RESEARCH TRAINING MEDICAL ASSEMBLY CENTER
                </h1>
                <Link to="/">
                    <img src={irtmacc} alt="Irtmac" className="irtmac" style={{ width: '150px', display: 'none' }} />
                </Link>

                <div className="topheader-text d-flex ">
                    <div onClick={handleClick} className="me-4">
                        <CiSearch className="SearchIcon" />
                    </div>
                    <div className="vl"></div>
                    <select onChange={handleChange}>
                        <option value="az">AZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                    <GiHamburgerMenu size={24} color="white" />
                </div>
                </div>

                {/* <div className="hamburger-menu" onClick={toggleMenu}>
                    <GiHamburgerMenu size={24} color="white" />
                </div> */}

                <div className={`menu-content ${isOpenMenu ? 'active' : ''}`}>
                    <div className="close-button" onClick={toggleMenu}>
                        <AiOutlineClose color="white" />
                    </div>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Ana Səhifə</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>Rəhbərin Müraciəti</Link></li>
                        <li><Link to="/Questions" onClick={toggleMenu}>Ən çox verilən suallar</Link></li>
                        <li><Link to="/Mission" onClick={toggleMenu}>Missiya və Dəyərlər</Link></li>
                        <li><Link to="/Telimler" onClick={toggleMenu}>Təlimlər</Link></li>
                        <li><Link to="/Telimciler" onClick={toggleMenu}>Təlimçilər</Link></li>
                        <li><Link to="/Media" onClick={toggleMenu}>Media Mərkəzi</Link></li>
                        <li><Link to="/NewsPage" onClick={toggleMenu}>Xəbərlər</Link></li>
                        <li><Link to="/Contact" onClick={toggleMenu}>ƏLAQƏ</Link></li>
                    </ul>
                </div>
            </div>

            {/* Search Input */}
            <div className={`row m-0 header-search ${isOpenSearch && 'active'}`}>
                <input type="text" placeholder="Search..." />
                {/* Close Icon to close the search */}
                {isOpenSearch && (
                    <AiOutlineClose className="close-search-icon" onClick={closeSearch} />
                )}
            </div>
        </div>
    );
}

export default Topheader;
