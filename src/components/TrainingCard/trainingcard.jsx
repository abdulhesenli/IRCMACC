import "../../header.css"
import './trainingcard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowIcon from '../../assets/Icon-right.svg'
// import {useGetEducationQuery} from "../../store/Api/education.js";
// import Loading from "../Ui/Loading.jsx";


function TrainingCard() {
    // const {data, isLoading, isError} = useGetEducationQuery();


    // let content;

    // if(isError){
    //     content = "Xeta bas verdi";
    // }else if(isLoading){
    //     content = <Loading/>
    // }else {
    //     content = data.map((item, index)=> (
    //         <div className="col-4" key={index}>
    //             <div className="Trainingcard">
    //                 {/* <img src={Doctor1} alt="Doctor1" className="Doctor1" style={{borderRadius:"19px"}} />  
    //                 <h2> {item.title}</h2>
    //                 <p>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p>
    //                 <div className="text">

    //                     <a href="#" className="Continue">Ətraflı</a>
    //                     <img src={ArrowIcon} alt="ArrowIcon" className="ArrowIcon"
    //                          style={{marginLeft: "10px", marginTop: "24px"}}/>
    //                 </div>


    //             </div>
    //         </div>
    //     ))
    // }


    return (


        <div>


            <div className="row" style={{marginTop: "40px", marginLeft: "-13px"}}>

                {/* {content} */}

                 <div className="col-4"  > 
                    <div className="Trainingcard"> 
                      {/* <img src={Doctor1} alt="Doctor1" className="Doctor1" style={{borderRadius:"19px"}} /> *!/  */}
                        <h2>Cərrahi Bacarıqların <br /> 
                           Əsasları</h2> 
                           <p>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p> 
                           <div className="text"> 
                                 
                                <a href="#" className="Continue">Ətraflı</a> 
                                <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px", marginTop:"24px"}}/> 
                            </div> 
                        
                      
                         
                    </div> 
                </div> 

                <div className="col-4"  > 
                    <div className="Trainingcard"> 
                        <h2>Cərrahi Bacarıqların <br /> 
                           Əsasları</h2> 
                           <p>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p> 
                           <div className="text"> 
                                 
                                <a href="#" className="Continue">Ətraflı</a> 
                                <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px", marginTop:"24px"}}/> 
                            </div> 
                        
                      
                         
                    </div> 
                </div> 

                <div className="col-4"  > 
                    <div className="Trainingcard"> 
                        <h2>Cərrahi Bacarıqların <br /> 
                           Əsasları</h2> 
                           <p>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p> 
                           <div className="text"> 
                                 
                                <a href="#" className="Continue">Ətraflı</a> 
                                <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px", marginTop:"24px"}}/> 
                            </div> 
                        
                      
                         
                    </div> 
                </div> 
                <div className="col-4"  > 
                    <div className="Trainingcard"> 
                        <h2>Cərrahi Bacarıqların <br /> 
                           Əsasları</h2> 
                           <p>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p> 
                           <div className="text"> 
                                 
                                <a href="#" className="Continue">Ətraflı</a> 
                                <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px", marginTop:"24px"}}/> 
                            </div> 
                        
                      
                         
                    </div> 
                </div> 
                <div className="col-4"  > 
                    <div className="Trainingcard"> 
                        <h2>Cərrahi Bacarıqların <br /> 
                           Əsasları</h2> 
                           <p>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p> 
                           <div className="text"> 
                                 
                                <a href="#" className="Continue">Ətraflı</a> 
                                <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px", marginTop:"24px"}}/> 
                            </div> 
                        
                      
                         
                    </div> 
                </div> 
                <div className="col-4"  > 
                    <div className="Trainingcard"> 
                        <h2>Cərrahi Bacarıqların <br /> 
                           Əsasları</h2> 
                           <p>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p> 
                           <div className="text"> 
                                 
                                <a href="#" className="Continue">Ətraflı</a> 
                                <img src={ArrowIcon} alt="ArrowIcon"  className="ArrowIcon" style={{marginLeft:"10px", marginTop:"24px"}}/> 
                            </div> 
                        
                      
                         
                    </div> 
                </div> 

            </div>


        </div>


    )
}

export default TrainingCard