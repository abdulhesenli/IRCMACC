import './telimler.css'
import Trainingcard from '../TrainingCard/Trainingcard';




function Telim(){
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>
            <div className='Telim-Title'>
                <h1 className='Telimlər-title'>Təlimlər</h1>
               
            </div>
            <Trainingcard/>
        </div>
  
        
    )
}

export default Telim