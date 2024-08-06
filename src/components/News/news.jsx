import "../../header.css"
import './news.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ellipse from '../../assets/Ellipse.svg'
import IconRight from '../../assets/Icon-right.svg'
import NewsCard from "../NewsCard/newscard";




function News(){
    
    return(

   

 <div>
         

     <div style={{position:"relative", marginTop:'35px'}}>
        <h1 className="News-text">Xəbərlər</h1>
        <hr className="News-hr" />
        <div className="News-circle">
        <img src={Ellipse} alt="Ellipse" className="Ellipse"  style={{width:"45px", height:"45px"}}/>
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"16px", left:"13px"}}/>
        </div>
        <p className="News-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

     </div>

     <NewsCard/>

          

       


 </div>

      

    )
}

export default News