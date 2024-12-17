import "../../header.css"
import './news.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Ellipse from '../../assets/Ellipse.svg'
import IconRight from '../../assets/Icon-right.svg'
import NewsCard from "../NewsCard/Newscard";
import { Link } from 'react-router-dom';




function News(){
    
    return(

   

 <div id="News">
         

     <div className="News">
        <h1 className="News-text">Xəbərlər</h1>
        <hr color="#B4C1D9"  className="News-hr"/>
        <Link to="/NewsPage" onClick={() => {window.scrollTo(0, 0);}}>
        <div className="News-circle">
        <img src={IconRight} alt="IconRight"  className="IconRight"  style={{position:"absolute", top:"14px", left:"11px"}}/>
        </div>
        </Link>

     </div>
     <p className="News-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


     <NewsCard/>

          

       


 </div>

      

    )
}

export default News