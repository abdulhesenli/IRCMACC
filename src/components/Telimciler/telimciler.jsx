import './telimciler.css'
import Trainerscard from '../Trainerscard/Trainerscard';




function Telimciler(){
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>
            <div className='Telimci-Title'>
                <h1 className='telimci-title'>Təlimçilər</h1>
                <p className='telimci-text'>Nunc eu velit ut quam egestas sodales fermentum at urna. Donec congue volutpat lorem, non malesuada justo pellentesque id.</p>
               
            </div>

            <Trainerscard/>
           <div style={{marginTop:'125px'}}></div>
            <Trainerscard/>

        </div>
  
        
    )
}

export default Telimciler