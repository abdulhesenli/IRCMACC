import "../../header.css"
import './newscard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Newsphoto from '../../assets/newsphoto.png'
import ArrowIcon from '../../assets/Icon-right.svg'
import {Link} from 'react-router-dom';
import { useGetNewsQuery } from "../../store/Api/news";
import Loading from "../Ui/Loading";





function NewsCard(){
    const {data, isLoading, isError} = useGetNewsQuery();


        let content;

     if(isError){
        content = "Xeta bas verdi";
     }else if(isLoading){
         content = <Loading/>
     }else {
    
         content = data.blogs.data.map((item, index)=> (

            
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <div className="NewsCard">
            <img src={Newsphoto} alt="Newsphoto" className="Newsphoto"  />
                
            <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>{item.name}</h2>
                   <p  className='text-custom  fs-2-xxl mt-3 line-clamp-2'>{item.short_title} </p>
                   <div className="Newstext">
                      <h6 className="Newtext">Xəbər / 17.04.24</h6>

                        <div>
                        <Link to={`/InsideNews/${item.id}`}className="ctaa"> <span>Ətraflı oxu</span> <img src={ArrowIcon} alt="ArrowIcon" /></Link>
                        </div>
                    </div>

            </div>
        </div>
        ))
     }

    
    return(

   

    <div style={{maxWidth:"1392px", margin:"auto"}}>
         


        <div className="row" style={{marginTop:"40px"}}>
            {content}
{/* 
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="NewsCard">
                <img src={Newsphoto} alt="Newsphoto" className="Newsphoto"  />
                    
                <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Kliniki Tibbi Mərkəz: Son iki ayda 36 nəfəri ilan sancıb</h2>
                       <p  className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Duis facilisis feugiat finibus. Sed molestie, justo non molestie feugiat,
                         dolor mi blandit ligula, id tristique dui elit et sem.</p>
                       <div className="Newstext">
                          <h6 className="Newtext">Xəbər / 17.04.24</h6>

                            <div>
                            <Link to="/InsideNews" className="ctaa"> <span>Ətraflı oxu</span> <img src={ArrowIcon} alt="ArrowIcon" /></Link>
              
                            </div>
                        </div>
                   
                 
                    
                </div>
            </div>
                  
            <div className="col-12 col-sm-6 col-lg-4"  >
                <div className="NewsCard">
                <img src={Newsphoto} alt="Newsphoto" className="Newsphoto"  />
                    
                    <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Kliniki Tibbi Mərkəz: Son iki ayda 36 nəfəri ilan sancıb</h2>
                    <p  className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Duis facilisis feugiat finibus. Sed molestie, justo non molestie feugiat,
                    dolor mi blandit ligula, id tristique dui elit et sem.</p>
                    <div className="Newstext">
                        <h6 className="Newtext">Xəbər / 17.04.24</h6>
                        <div>
                        <Link to="/InsideNews" className="ctaa"> <span>Ətraflı oxu</span> <img src={ArrowIcon} alt="ArrowIcon" /></Link>
                            </div>
                        </div>
                   
                 
                    
                </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4"  >
                <div className="NewsCard">
                <img src={Newsphoto} alt="Newsphoto" className="Newsphoto"  />
                <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>Kliniki Tibbi Mərkəz: Son iki ayda 36 nəfəri ilan sancıb</h2>
                <p  className='text-custom  fs-2-xxl mt-3 line-clamp-2'>Duis facilisis feugiat finibus. Sed molestie, justo non molestie feugiat,
                dolor mi blandit ligula, id tristique dui elit et sem.</p>
                       <div className="Newstext">
                           <h6 className="Newtext">Xəbər / 17.04.24</h6>
                           <div>
                           <Link to="/InsideNews" className="ctaa"> <span>Ətraflı oxu</span> <img src={ArrowIcon} alt="ArrowIcon" /></Link>
                            </div>
                        </div>
                   
                 
                    
                </div>
            </div> */}
     
        </div>
          

       


 </div>

      

    )
}

export default NewsCard