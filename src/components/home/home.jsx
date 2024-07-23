// import  from "react";
import "../../assets/header.css"
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rectangle from '../../assets/Rectangle.png'
import Image from '../../assets/image.svg'
import LogoIpsum from '../../assets/image1.svg'
import LogoIpsum3 from '../../assets/image3.svg'
import LogoIpsum4 from '../../assets/image4.svg'
import Group2 from '../../assets/Group2.svg'



function Home(){
    
    return(

   

 <div>
         

         <div id="home" className="container">

            <img id="Rec_img" src={Rectangle}  alt="Rectangle" className="Rectangle" />
            <svg id="vector_1" height="200" width="200" xmlns="http://www.w3.org/2000/svg">
                <circle r="83" cx="83" cy="14" fill="#0074a75c" />
            </svg> 
            <svg id="vector_2" height="200" width="200" xmlns="http://www.w3.org/2000/svg" >
                <circle r="83" cx="83" cy="14" fill="#0074a75c" />
            </svg> 
            <svg id="vector_3" clipPath="flat-bottom" height="200" width="200"xmlns="http://www.w3.org/2000/svg" >
                <circle r="83" cx="83" cy="14" fill="#0074a75c" />
            </svg> 
                <div>
                <img id="image" src={Image}  alt="Vector" className="Vector" />

                <svg id="vector_4" height="200" width="200" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="83" cx="83" cy="85" fill="#0074a75c" />
                    </svg> 
                    <svg id="vector_4_1" height="200" width="200" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="83" cx="83" cy="85" fill="#0074a75c" />
                    </svg> 
                    <svg id="vector_4_2" height="200" width="200" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="70" cx="83" cy="85" fill="#0074a75c" />
                    </svg> 
                    <svg id="vector_5" height="200" width="200" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="83" cx="83" cy="14" fill="#03466429" />
                    </svg> 
                </div>
                
                <div>
                   <h1 className="text-h">Beynəlxalq    <br />
                        Tibb Tədqiqatları
                        və Təlim Mərkəzi
                    </h1>

                    <div className="circle"></div>

                   

                </div>

                <div className="group2">
            
                    <img src={Group2}  alt="Group2" className="Group2" />
                </div>

                <div className="row" style={{marginLeft:"40px", marginBottom:"100px"}}>
                    <div className="col-3">
                     <div className="logo">
                        <img src={LogoIpsum}  alt="LogoIpsum" className="LogoIpsum" />
                    </div>                  
                    </div>
                     <div className="col-3">
                        <div className="logo">
                         <img src={LogoIpsum4}  alt="LogoIpsum4" className="LogoIpsum4" />
                        </div>                   
                    </div>
                    <div className="col-3">
                        <div className="logo">
                         <img src={LogoIpsum3}  alt="LogoIpsum3" className="LogoIpsum3" />
                         </div>                   
                    </div>
                     <div className="col-3">
                         <div className="logo">
                         <img src={LogoIpsum4}  alt="LogoIpsum4" className="LogoIpsum4" />
                        </div>                 
                    </div>
                </div>

                <div className="title">
                    <h1 className="title1">
                    Mauris laoreet ante at nunc dictum Mauris laoreet ante at.
                    </h1>
                    <p className="title2"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis massa nisl, porta ac erat quis, semper sollicitudin mi Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Duis massa nisl, porta ac erat quis, semper sollicitudin mi.
                    </p>
                </div>

               
               
        </div>

       


 </div>

      

    )
}

export default Home

