// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trainingcard.css'
import ArrowIcon from '../../assets/Icon-right.svg'
// import {Link} from 'react-router-dom';
// import ArrowIconwhite from '../../assets/arrow-right.svg'
import {useGetEducationQuery} from "../../store/Api/education.js";
import Loading from "../Ui/Loading.jsx";
import { Link, useLocation } from 'react-router-dom';




function Trainingcard() {

        const location=useLocation()
     const {data, isLoading, isError} = useGetEducationQuery();
        let content;

     if(isError){
        content = "Xeta bas verdi";
     }else if(isLoading){
         content = <Loading/>
     }else {
    
       if(location.pathname==="/"){
        content = data.trainings.slice(0,6).map((item, index)=> (

            
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
       }else{
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
     }


    return (


        <div>


            <div className="row" style={{ marginTop: "40px", marginBottom: "85px" }}>

                {content}
               

            </div>


        </div>


    )
}

export default Trainingcard