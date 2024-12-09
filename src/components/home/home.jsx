// import  from "react";
import { useState, useEffect } from 'react';
import "../../header.css"
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rectangle from '../../assets/doctors.jpeg'
import LogoIpsum from '../../assets/image1.svg'
import LogoIpsum2 from '../../assets/image2.svg'
import LogoIpsum3 from '../../assets/image3.svg'
import LogoIpsum4 from '../../assets/image4.svg'
import Group2 from '../../assets/Group2.svg'
import Group4 from '../../assets/Group4.svg'
import Arrow from '../../assets/arrow-right.svg'
// import Trainers from "../Trainers/Trainers";
// import Training from "../training/Training";
// import Registration from "../registration/Registration";
import Testimonials from "../Testimonials/Testimonials";
// import News from "../News/News";
// import InsideNews from '../İnsideNews/Insidenews';
// import NewsPage from "../NewsPage/newspage";
// import Questions from "../Questions/questions";




function Home(){
    
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < 36) {
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
              
            
            }, 10);
            return () => clearInterval(interval);
        }
    }, [counter]);

    return(

   

 <div>
         

            <div id="home">
              <div style={{width:"100%",position:"relative"}} className=''>
              <img id="Rec_img" src={Rectangle}  alt="Rectangle" className="Rectangle" />
              <div className="group2">
            
               <img src={Group2}  alt="Group2" className="Group2" />
                 </div>

              </div>

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
                </div>


                <div id='HomeGroup' className='HomeGroup' style={{height:"365px"}}>

                <div className='HomeBox' >
                    <h1 className="title">
                    Mauris laoreet ante at nunc dictum Mauris laoreet ante at.
                    </h1>
                    <p className="title1"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis massa nisl, porta ac erat quis, semper sollicitudin mi Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Duis massa nisl, porta ac erat quis, semper sollicitudin mi.
                    </p>
                </div>

                <div className="box row">
                    <div className="inbox col-6">
                        <h1 className="boxtext">{counter}+</h1>
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

                    <div className="line"></div>
                   <hr className="line2" />
                </div>
            </div>

            <div className="banner banright">
                <div>
                <img src={Group4} alt="Group4" className="Group4" />
                </div>
                
                <div className="HRline"></div>

                <div id='BanText' className='Bantext'>

                    <h1 className="BanTitle">Mauris laoreet ante at nunc dictum.</h1>
                    <p className="BanTitle2"> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Vivamus luctus, neque at posuere tincidunt, nibh lorem hendrerit lectus, 
                      ac facilisis sem diam eget sapien. Sed justo enim, rutrum sit amet rutrum non, 
                      luctus vel magna.   Nam quis blandit odio. Mauris maximus diam a enim consequat lacinia. 
                      Mauris at auctor neque. 
                    </p>

                        <button className="Ban-btn">Ətraflı <span>
                        <img src={Arrow} alt="Arrow"  className="Arrow" />
                        </span> </button>

                </div>

            </div>
     
            </div>
          
            {/* <Training/>  */}
            {/* <Trainers/> */}
            {/* <Registration/> */}
            <Testimonials/>
            {/* <News/>  */}
            {/* <InsideNews/> */}
            {/* <NewsPage/> */}

            {/* <Questions/> */}
            
 </div>

    )
}

export default Home

