import "../../header.css"
import './newscard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import  Newsphoto from '../../assets/newsphoto.png'
import ArrowIcon from '../../assets/Icon-right.svg'
import {Link,useLocation} from 'react-router-dom';
import { useGetNewsQuery } from "../../store/Api/news";
import Loading from "../Ui/Loading";





function NewsCard(){
     const location=useLocation()
    const {data, isLoading, isError} = useGetNewsQuery();
    const baseUrl = import.meta.env.VITE__BASE_URL_IMAGE

        let content;

     if(isError){
        content = "Xeta bas verdi";
     }else if(isLoading){
         content = <Loading/>
     }else {

        if(location.pathname==="/"){
            content = data.blogs.data.slice(0,3).map((item, index)=> (

            
                <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="NewsCard">
                <img src={`${baseUrl}/${item.cover}`} alt="Newsphoto" className="Newsphoto"  />
                    
                <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-3'>{item.name}</h2>
                       <p  className='text-custom  fs-2-xxl mt-3 line-clamp-3'>{item.short_title} </p>
                       <div className="Newstext">
                          <h6 className="Newtext">Xəbər / 17.04.24</h6>
    
                            <div>
                            <Link to={`/InsideNews/${item.id}`} onClick={() => {
                      window.scrollTo(0, 0); // Sayfanın en üstüne kaydırır
                    }}className="ctaa"> <span>Ətraflı oxu</span> <img src={ArrowIcon} alt="ArrowIcon" /></Link>
                            </div>
                        </div>
    
                </div>
            </div>
            ))
        }else if( location.pathname === "/InsideNews/:id"){
            content = data.blogs.data.slice(0,3).map((item, index)=> (

            
                <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="NewsCard">
                <img src={`${baseUrl}/${item.cover}`} alt="Newsphoto" className="Newsphoto"  />
                    
                <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-3'>{item.name}</h2>
                       <p  className='text-custom  fs-2-xxl mt-3 line-clamp-3'>{item.short_title} </p>
                       <div className="Newstext">
                          <h6 className="Newtext">Xəbər / 17.04.24</h6>
    
                            <div>
                            <Link to={`/InsideNews/${item.id}`} onClick={() => {
                      window.scrollTo(0, 0); // Sayfanın en üstüne kaydırır
                    }}className="ctaa"> <span>Ətraflı oxu</span> <img src={ArrowIcon} alt="ArrowIcon" /></Link>
                            </div>
                        </div>
    
                </div>
            </div>
            ))
        }
        else{
            content = data.blogs.data.map((item, index)=> (

            
                <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="NewsCard">
                <img src={`${baseUrl}/${item.cover}`} alt="Newsphoto" className="Newsphoto"  />
                    
                <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-3'>{item.name}</h2>
                       <p  className='text-custom  fs-2-xxl mt-3 line-clamp-3'>{item.short_title} </p>
                       <div className="Newstext">
                          <h6 className="Newtext">Xəbər / 17.04.24</h6>
    
                            <div>
                            <Link to={`/InsideNews/${item.id}`} onClick={() => {
                      window.scrollTo(0, 0); // Sayfanın en üstüne kaydırır
                    }}className="ctaa"> <span>Ətraflı oxu</span> <img src={ArrowIcon} alt="ArrowIcon" /></Link>
                            </div>
                        </div>
    
                </div>
            </div>
            ))
        }
    
     
     }

    
    return(

   

    <div style={{maxWidth:"1392px", margin:"auto"}}>
         


        <div className="row" style={{marginTop:"40px"}}>
            {content}

     
        </div>
   
 </div>
    )
}

export default NewsCard