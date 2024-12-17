import "../../header.css"
import './trainers.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainersCard from '../Trainerscard/Trainerscard';
import IconRight from '../../assets/Icon-right.svg'
import { Link } from "react-router-dom";




function Trainers(){
    
    return(

   

 <div className="Trainers">
         

     <div id='Trainers'>
        <h1 className="Traniners-text">Təlimçilər</h1>

        <hr color="#B4C1D9" className="traniners-hr" />
        <Link to="/Telimciler" onClick={() => {window.scrollTo(0, 0);}}>
      
        <div className="trainers-circle">
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"14px", left:"11px"}}/>
        </div>
        </Link>
     </div>
     <p className="Traniners-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <TrainersCard/>
          

       


 </div>

      

    )
}

export default Trainers