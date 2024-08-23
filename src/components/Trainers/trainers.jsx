import "../../header.css"
import './trainers.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainersCard from '../Trainerscard/trainerscard';
import Ellipse from '../../assets/Ellipse.svg'
import IconRight from '../../assets/Icon-right.svg'




function Trainers(){
    
    return(

   

 <div className="Trainers">
         

     <div id='Trainers'>
        <h1 className="Traniners-text">Təlimçilər</h1>
        <hr className="traniners-hr" />
        <div className="trainers-circle">
        <img src={Ellipse} alt="Ellipse" className="Ellipse"  style={{width:"45px", height:"45px"}}/>
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"16px", left:"13px"}}/>
        </div>

     </div>
     <p className="Traniners-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <TrainersCard/>
          

       


 </div>

      

    )
}

export default Trainers