
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trainingcard.css'
import ArrowIcon from '../../assets/Icon-right.svg'
import {Link} from 'react-router-dom';


// import ArrowIconwhite from '../../assets/arrow-right.svg'
// import {useGetEducationQuery} from "../../store/Api/education.js";
// import Loading from "../Ui/Loading.jsx";

// const TrainingCard = () => {/
//   const data = [
//     { title: 'Cərrahi Bacarıqların Əsasları', description: 'Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.' },
//     { title: 'Cərrahi Bacarıqların Əsasları', description: 'Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.' },
//     { title: 'Cərrahi Bacarıqların Əsasları', description: 'Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.' },
//     { title: 'Cərrahi Bacarıqların Əsasları', description: 'Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.' },
//     { title: 'Cərrahi Bacarıqların Əsasları', description: 'Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.' },
//     { title: 'Cərrahi Bacarıqların Əsasları', description: 'Heyvan modelləri və cərrahiyyə nümunələri üzərində əsas cərrahi texnikaların tətbiqi.' },
//   ];

//   return (
// <div>
//   <div className="row" style={{ marginTop: "40px", marginLeft: "-13px" }}>
//     {data.map((item, index) => (
//       <div className="col-4" key={index}>
//         <div className="Trainingcard">
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//           <div className="Traningtext">
//             <a href="#" className="Continue">
//               <span className="Trainingtext2">ss'



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
    //                 <div className="Traningtext">

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


            <div className="row" style={{ marginTop: "40px", marginBottom: "85px" }}>

                {/* {content} */}
                
                <div className="col-12 col-sm-6 col-lg-4"  >
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
                            {/* <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5" />
                                <polyline points="8 1 12 5 8 9" />
                            </svg> */}
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
                            {/* <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5" />
                                <polyline points="8 1 12 5 8 9" />
                            </svg> */}
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
                            {/* <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5" />
                                <polyline points="8 1 12 5 8 9" />
                            </svg> */}
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
                            {/* <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5" />
                                <polyline points="8 1 12 5 8 9" />
                            </svg> */}
                            </a>
                        </div>






                    </div>
                </div>

            </div>


        </div>


    )
}

export default TrainingCard