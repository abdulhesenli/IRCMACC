import '../../header.css'
import './training.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainingCard from '../TrainingCard/trainingcard';
import Ellipse from '../../assets/Ellipse.svg'
import IconRight from '../../assets/Icon-right.svg'
// import Doctor1 from '../../assets/doctor1.png'



function Training(){
    
   return(

   

      <div>
         

         <div>
        <h1 className="Traning-text">Təlimlər</h1>
        <hr className="traning-hr" />
        <div className="tr-circle">
        <img src={Ellipse} alt="Ellipse" className="Ellipse"  style={{width:"45px", height:"45px"}}/>
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"16px", left:"13px"}}/>
        </div>
        <p className="Traning-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div>
         <TrainingCard/>
          

       


      </div>

      

    )
}

export default Training