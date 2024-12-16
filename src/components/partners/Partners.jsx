// import  from "react";
// import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import LogoIpsum from '../../assets/image1.svg'
// import LogoIpsum2 from '../../assets/image2.svg'
// import LogoIpsum3 from '../../assets/image3.svg'
// import LogoIpsum4 from '../../assets/image4.svg'

import { useGetMainPageQuery } from '../../store/Api/mainpage';
import Loading from '../Ui/Loading';

const baseUrl = import.meta.env.VITE__BASE_URL_IMAGE


console.log(import.meta.env)

function Partners(){
    const { data,isLoading,isError } = useGetMainPageQuery();

    let content;

    if (isError) {
      content = "Xeta bas verdi";
    } else if (isLoading) {
      content = <Loading/>;
      
    } else {

        // const baseUrl = import.meta.env.IMAGE_VITE_BASE_URL
  


        console.log(baseUrl)
        
     content = data.partners.map((item, index) => (
          
              <div className="logo col-3" key={index}>
            
                  <img src={`${baseUrl}/${item.image}`} alt="LogoIpsum" className="LogoIpsum LogoIpsum3"  />
                  <h1>{item.name1}</h1>
              </div>
      
      ));
    }
    

    return(
        <div id="Homelogo" className="Homelogo row">
         
         
              {content}
{/* 
          <div id='Homelogo' className='Homelogo row'>
             
             <div className="logo">
                 <img src={LogoIpsum}  alt="LogoIpsum" className="LogoIpsum" />
              </div>                  

             <div className="logo">
                  <img src={LogoIpsum2}  alt="LogoIpsum4" className="LogoIpsum4" />
             </div>
            
             <div className="logo">
                  <img src={LogoIpsum3}  alt="LogoIpsum3" className="LogoIpsum3" />
             </div>                   

             <div className="logo">
                  <img src={LogoIpsum4}  alt="LogoIpsum4" className="LogoIpsum4" />
             </div>                 
         </div> */}
        
        </div>
    )
}

export default Partners

