import "../../header.css"
import './trainerscard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor1 from '../../assets/doctor1.svg'
import Doctor2 from '../../assets/doctor2.svg'
import Doctor3 from '../../assets/doctor3.svg'
import Doctor4 from '../../assets/doctor4.svg'



function TrainersCard(){
    
    return(

   

 <div style={{maxWidth:"1350px", marginLeft:"51px"}}>
         


     <div className="row" style={{marginTop:"40px", marginLeft:"-13px"}}>
            <div className="col-3" >
                <div className="card">
                    <img src={Doctor1} alt="Doctor1" className="Doctor1" style={{borderRadius:"19px"}} />

                    <div className="card-content ">
                       <h2>Name <br />Surname</h2>
                       <p>Op. Dr. Uzm.<br/>Ürek-damar cərrahı</p>

                    </div>

                </div>
            </div>
            <div className="col-3"  >
                <div className="card">
                    <img src={Doctor2} alt="Doctor2" className="Doctor2" style={{borderRadius:"19px"}} />

                    <div className="card-content ">
                       <h2>Name <br />Surname</h2>
                       <p>Op. Dr. Uzm.<br/>Ürek-damar cərrahı</p>

                    </div>

                </div>
            </div>
            
            <div className="col-3" >
                <div className="card">
                    <img src={Doctor3} alt="Doctor3" className="Doctor3" style={{borderRadius:"19px"}} />

                    <div className="card-content ">
                       <h2>Name <br />Surname</h2>
                       <p>Op. Dr. Uzm.<br/>Ürek-damar cərrahı</p>

                    </div>

                </div>
            </div>
            
            <div className="col-3"  >
                <div className="card">
                    <img src={Doctor4} alt="Doctor4" className="Doctor4" style={{borderRadius:"19px"}} />

                    <div className="card-content ">
                       <h2>Name <br />Surname</h2>
                       <p>Op. Dr. Uzm.<br/>Ürek-damar cərrahı</p>

                    </div>

                </div>
            </div>
            
            
            
            


        </div>
          

       


 </div>

      

    )
}

export default TrainersCard