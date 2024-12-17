// import  from "react";
import { useState, useEffect } from 'react';
import "../../header.css"
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Rectangle from '../../assets/doctors.jpeg'
// import LogoIpsum from '../../assets/image1.svg'
// import LogoIpsum2 from '../../assets/image2.svg'
// import LogoIpsum3 from '../../assets/image3.svg'
// import LogoIpsum4 from '../../assets/image4.svg'
import Group2 from '../../assets/Group2.svg'
import Group4 from '../../assets/Group4.svg'
import Arrow from '../../assets/arrow-right.svg'
import Trainers from "../Trainers/Trainers.jsx";
import Training from "../training/Training.jsx";
import Registration from "../registration/Registration.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import News from "../News/News.jsx";
// import InsideNews from '../InsideNews/Insidenews';
// import Newspage from "../Newspage/newspage";
// import Questions from "../Questions/questions";
import { useGetMainPageQuery } from '../../store/Api/mainpage';
import Loading from '../Ui/Loading';
import Partners from '../partners/Partners';
import Box from '../Homebox/Box';




function Home(){
    const { data,isLoading,isError } = useGetMainPageQuery();
    const [counter, setCounter] = useState(0);
    const baseUrl = import.meta.env.VITE__BASE_URL_IMAGE
    let content;
    if (isError) {
      content = "Xeta bas verdi";
    } else if (isLoading) {
      content = <Loading />;
    } else {
      const slider = data.slayder; // Slider verisini alıyoruz
    
      content = (
        <div id="home">
          <div style={{ width: "100%", position: "relative" }}>
            {/* Slider görseli */}
            <img
              id="Rec_img"
              src={`${baseUrl}/${slider.image}`} // Görselin tam yolunu alıyoruz
              alt="Rectangle"
              className="Rectangle"
            />
            <div className="group2">
              <img src={Group2} alt="Group2" className="Group2" />
            </div>
          </div>
    

        </div>
      );
    }


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
        
              {/* <div style={{width:"100%",position:"relative"}} className=''>
              <img id="Rec_img" src={Rectangle}  alt="Rectangle" className="Rectangle" />
              <div className="group2">
               <img src={Group2}  alt="Group2" className="Group2" />
              </div>

              </div> */}
              </div>
              {content}
              <Partners/>
              <Box/>
       
              

           


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
     
         
          
            <Training/> 
            <Trainers/>
            <Registration/>
            <Testimonials/>
            <News/> 
            {/* <InsideNews/> */}
            {/* <Newspage/> */}

            {/* <Questions/> */}
        </div>
    )
}

export default Home

