import '../../header.css'
import './training.css'
import '../../res.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainingCard from '../TrainingCard/Trainingcard';
import Ellipse from '../../assets/Ellipse.svg'
import IconRight from '../../assets/Icon-right.svg'
import {useTranslation} from "react-i18next";
// import Doctor1 from '../../assets/doctor1.png'



function Training(){
    const {t} = useTranslation();
    
   return(

   

      <div className='TraningTop'>
         

         <div id='TraningTop'>
        <h1 className="Traning-text"> {t('education')} </h1>
        <hr className="traning-hr" />
        <div className="tr-circle">
        <img src={Ellipse} alt="Ellipse" className="Ellipse"  style={{width:"45px", height:"45px"}}/>
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"16px", left:"13px"}}/>
        </div>
        
         </div>
         <p className="Traning-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <TrainingCard/>
         
      </div>

      

    )
}

export default Training