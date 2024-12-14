import "../../header.css"
import './trainers.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainersCard from '../Trainerscard/trainerscard';
import IconRight from '../../assets/Icon-right.svg'




function Trainers(){
    
    return(

   

 <div className="Trainers">
         

     <div id='Trainers'>
        <h1 className="Traniners-text">Təlimçilər</h1>
        <hr color="#B4C1D9" className="traniners-hr" />
        <div className="trainers-circle">
      
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"14px", left:"11px"}}/>
        </div>

     </div>
     <p className="Traniners-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <TrainersCard/>
          

       


 </div>

      

    )
}

export default Trainers