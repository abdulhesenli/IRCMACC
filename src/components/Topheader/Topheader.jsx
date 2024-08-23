// import React from "react";
import './topheader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CiSearch} from "react-icons/ci";
// import {Link} from 'react-router-dom';
// import Searchicon from '../../assets/searchicon.svg'
import {useTranslation} from "react-i18next";
import {useState} from "react";





function Topheader() {
    const { i18n} = useTranslation();
    const [isOpenSearch, setIsOpenSearch ] = useState(false);

    const handleChange = (e) => {
        {
            i18n.changeLanguage(e.target.value)
        }
    }



    const handleClick = ()=>{
        setIsOpenSearch(true);
    }
    return (

        <div>
            
            <div className="TopHeader"  >
                <h1 className='topheader-text ' >INTERNATIONAL RESEARCH TRAINING MEDICAL ASSEMBLY CENTER</h1>

                <div className="topheader-text d-flex">

                    <div onClick={handleClick} className="me-4"><CiSearch className="SearchIcon"/>
                    </div>
                    <div className="vl"></div>
                    <select onChange={handleChange} name="" id="">
                        <option value="az">AZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>

            </div>
       
        
            <div className={`row m-0 header-search ${isOpenSearch && 'active'}`}>
                <input type="text"  />
                    
            </div>


         


        </div>


    )
}

export default Topheader

