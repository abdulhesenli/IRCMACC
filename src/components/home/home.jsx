// import  from "react";
import "../../assets/header.css"
import './home.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Rectangle from '../../assets/Rectangle.png'
import Image from '../../assets/image.svg'



function Home(){
    return(

 <div>
         

            <div id="home">
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
            </div>


 </div>

      

    )
}

export default Home

