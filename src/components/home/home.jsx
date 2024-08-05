// import  from "react";
import "../../header.css"
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rectangle from '../../assets/Rectangle.png'
import Image from '../../assets/image.svg'
import LogoIpsum from '../../assets/image1.svg'
import LogoIpsum3 from '../../assets/image3.svg'
import LogoIpsum4 from '../../assets/image4.svg'
import Group2 from '../../assets/Group2.svg'
import Group3 from '../../assets/Group3.svg'
import Group4 from '../../assets/Group4.svg'
import Arrow from '../../assets/arrow-right.svg'
import Trainers from "../Trainers/trainers";
import Training from "../training/training";
import Registration from "../registration/registration";
import Testimonials from "../Testimonials/testimonials";



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

                <div style={{height:"365px"}}>
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

                <div className="box row">
                    <div className="inbox col-6">
                        <h1 className="boxtext">36+</h1>
                        <p className="boxtext1">Təlim sayı</p>
                    </div>
                    <div className="inbox col-6">
                        <h1 className="boxtext">12+</h1>
                        <p className="boxtext1">Təlimçi sayı</p>
                    </div>
                    <div className="inbox col-6">
                        <h1 className="boxtext">256+</h1>
                        <p className="boxtext1">Məzun sayı</p>
                    </div>
                    <div className="inbox col-6">
                        <h1 className="boxtext">10+</h1>
                        <p className="boxtext1">Təcrübə</p>
                    </div>

                    {/* <hr className="line" /> */}
                    <div className="line"></div>
                   <hr className="line2" />
                </div>
                </div>

               
               <div style={{height:"400px"}}>
               <div className="banner">
                
                <img src={Group4} style={{marginLeft:"130px", marginTop:"40px"}} alt="Group4" className="Group4" />
                <div className="HRline"></div>
                <img src={Group3} style={{marginLeft:"862px", marginTop:"-115px"}} alt="Group3" className="Group3" />
    
                <h1 className="BanTitle">Mauris laoreet ante at nunc dictum.</h1>
                <p className="BanTitle2"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus luctus, neque at posuere tincidunt, nibh lorem hendrerit lectus, 
                ac facilisis sem diam eget sapien. Sed justo enim, rutrum sit amet rutrum non, 
                luctus vel magna.   Nam quis blandit odio. Mauris maximus diam a enim consequat lacinia. 
                Mauris at auctor neque. 
                </p>
    
                <button className="Ban-btn">Ətraflı
                </button>
                <img src={Arrow} alt="Arrow" style={{position:"absolute", bottom:"47px" , left:"545px"}} className="Arrow" />
                    </div>
               </div>
           

               

            </div>
          
            <Training/>
            <Trainers/>
            <Registration/>
            <Testimonials/>
           

 </div>

      

    )
}

export default Home

