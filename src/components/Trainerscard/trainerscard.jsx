import "../../header.css"
import '../../res.css'
import './trainerscard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor1 from '../../assets/doctor1.svg'
import Doctor2 from '../../assets/doctor2.svg'
import Doctor3 from '../../assets/doctor3.svg'
import Doctor4 from '../../assets/doctor4.svg'
// import {useGetMentorQuery} from "../../store/Api/mentor.js";
// import Loading from "../Ui/Loading.jsx";
// import ArrowIcon from "../../assets/Icon-right.svg";


function TrainersCard() {
    // const {data, isLoading, isError} = useGetMentorQuery();


    // let content;

    // if(isError){
    //     content = "Xeta bas verdi";
    // }else if(isLoading){
    //     content = <Loading/>
    // }else {
    //     content = data.slice(0,10).map((item, index)=> (
    //         <div className="col-3">
    //             <div className="card">
    //                 <img src={item.url} alt="Doctor1" className="Doctor1" style={{borderRadius: "19px"}}/>

    //                 <div className="card-content ">
    //                     <h2> {item.title} </h2>
    //                     <p>Op. Dr. Uzm.<br/>Ürek-damar cərrahı</p>

    //                 </div>

    //             </div>
    //         </div>
    //     ))
    // }

    return (


        <div id="TrainersCard">


            <div className="row" style={{marginTop: "40px"}}>

                {/* {content} */}

                <div className="col-12 col-sm-6 col-lg-3"  >   
                      <div className="card">   
                          <img src={Doctor1} alt="Doctor2" className="Doctor" style={{borderRadius:"19px"}} />   

                          <div className="card-content ">   
                             <h2>Name <br />Surname</h2>   
                             <p>Op. Dr. Uzm.<br/>Ürek-damar cərrahı</p>   

                          </div>   

                      </div>   
                  </div>  

                  <div className="col-12 col-sm-6 col-lg-3"  >   
                      <div className="card">   
                          <img src={Doctor2} alt="Doctor2" className="Doctor" style={{borderRadius:"19px"}} />   

                          <div className="card-content ">   
                             <h2>Name <br />Surname</h2>   
                             <p>Op. Dr. Uzm.<br/>Ürek-damar cərrahı</p>   

                          </div>   

                      </div>   
                  </div>   

                  <div className="col-12 col-sm-6 col-lg-3" >   
                      <div className="card">   
                          <img src={Doctor3} alt="Doctor3" className="Doctor" style={{borderRadius:"19px"}} />   

                          <div className="card-content ">   
                             <h2>Name <br />Surname</h2>   
                             <p>Op. Dr. Uzm.<br/>Ürek-damar cərrahı</p>   

                          </div>   

                      </div>   
                  </div>   

                  <div className="col-12 col-sm-6 col-lg-3"  >   
                      <div className="card">   
                          <img src={Doctor4} alt="Doctor4" className="Doctor" style={{borderRadius:"19px"}} />   

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