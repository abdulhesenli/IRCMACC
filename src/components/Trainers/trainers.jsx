import "../../header.css"
import './trainers.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainersCard from '../Trainerscard/trainerscard';
import Ellipse from '../../assets/Ellipse.svg'
import IconRight from '../../assets/Icon-right.svg'
// import Doctor1 from '../../assets/doctor1.png'



function Trainers(){
    
    return(

   

 <div>
         

     <div style={{position:"relative"}}>
        <h1 className="Traniners-text">Təlimçilər</h1>
        <hr className="traniners-hr" />
        <div className="trainers-circle">
        <img src={Ellipse} alt="Ellipse" className="Ellipse"  style={{width:"45px", height:"45px"}}/>
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"16px", left:"13px"}}/>
        </div>
        <p className="Traniners-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

     </div>
<TrainersCard/>
          

       


 </div>

      

    )
}

export default Trainers