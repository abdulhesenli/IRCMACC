import '../../header.css'
import './training.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Trainingcard from '../TrainingCard/Trainingcard.jsx';

import IconRight from '../../assets/Icon-right.svg'
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';
// import Doctor1 from '../../assets/doctor1.png'



function Training(){
    const {t} = useTranslation();
    
   return(

   

      <div className='TraningTop'>
         

         <div id='TraningTop'>
        <h1 className="Traning-text"> {t('education')} </h1>
        <hr color="#B4C1D9"   className="traning-hr" />
        <Link to="/Telimler"onClick={() => {window.scrollTo(0, 0);}}>
        
        <div className="tr-circle">
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"14px", left:"11px"}}/>
        </div>
        </Link>
         </div>
         <p className="Traning-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <Trainingcard/>
         
      </div>

      

    )
}

export default Training