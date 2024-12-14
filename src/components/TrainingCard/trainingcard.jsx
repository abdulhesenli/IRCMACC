// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trainingcard.css'
import ArrowIcon from '../../assets/Icon-right.svg'
// import {Link} from 'react-router-dom';
// import ArrowIconwhite from '../../assets/arrow-right.svg'
import {useGetEducationQuery} from "../../store/Api/education.js";
import Loading from "../Ui/Loading.jsx";
import { Link } from 'react-router-dom';




function TrainingCard() {
     const {data, isLoading, isError} = useGetEducationQuery();


        let content;

     if(isError){
        content = "Xeta bas verdi";
     }else if(isLoading){
         content = <Loading/>
     }else {
    
         content = data.trainings.map((item, index)=> (

            
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="Trainingcard">   
                     <h2 className='text-clamp-3'> {item.title}</h2>
                     <p className='text-clamp-3'> {item.short_desc} </p>
                     <div className="Traningtext">
                            <Link to={`/telimler/${item.id}`} className="cta"><span>Ətraflı oxu</span>
                            <img src={ArrowIcon} alt="ArrowIcon" />
                            </Link>
                    </div>


                 </div>
            </div>
        ))
     }


    return (


        <div>


            <div className="row" style={{ marginTop: "40px", marginBottom: "85px" }}>

                {content}
                
                {/* <div className="col-12 col-sm-6 col-lg-4"  >
                <Link  to="/Telimdaxili" style={{textDecoration:'none'}}>
                <div className="Trainingcard">
                        <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Cərrahi Bacarıqların <br />
                            Əsasları</h2>
                        <p className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p>

                        <div className="Traningtext">
                            <a href="#" className="cta"><span>Ətraflı oxu</span>
                            <img src={ArrowIcon} alt="ArrowIcon" />
                            </a>
                        </div>
                    </div> </Link>
                  
                </div>
                <div className="col-12 col-sm-6 col-lg-4"  >
                    <div className="Trainingcard">
                        <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Cərrahi Bacarıqların <br />
                            Əsasları</h2>
                        <p className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p>
                        <div className="Traningtext">
                             <a href="#" className="cta"><span>Ətraflı oxu</span>
                             <img src={ArrowIcon} alt="ArrowIcon"  />
                       
                            </a>
                        </div>




                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4"  >
                    <div className="Trainingcard">
                        <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Cərrahi Bacarıqların <br />
                            Əsasları</h2>
                        <p className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p>
                        <div className="Traningtext">
                        <a href="#" className="cta"><span>Ətraflı oxu</span>
                        <img src={ArrowIcon} alt="ArrowIcon"  />
                           
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4"  >
                    <div className="Trainingcard">
                        <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Cərrahi Bacarıqların <br />
                            Əsasları</h2>
                        <p className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p>
                        <div className="Traningtext">
                        <a href="#" className="cta"><span>Ətraflı oxu</span>
                        <img src={ArrowIcon} alt="ArrowIcon"  />
                            
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4"  >
                    <div className="Trainingcard">
                        <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Cərrahi Bacarıqların <br />
                            Əsasları</h2>
                        <p className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p>
                        <div className="Traningtext">
                        <a href="#" className="cta"><span>Ətraflı oxu</span>
                        <img src={ArrowIcon} alt="ArrowIcon" />
                            
                            </a>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4"  >
                    <div className="Trainingcard">
                        <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Cərrahi Bacarıqların <br />
                            Əsasları</h2>
                        <p className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.</p>
                        <div className="Traningtext">
                        <a href="#" className="cta"><span>Ətraflı oxu</span>
                        <img src={ArrowIcon} alt="ArrowIcon" />
                           
                            </a>
                        </div>






                    </div>
                </div> */}

            </div>


        </div>


    )
}

export default TrainingCard