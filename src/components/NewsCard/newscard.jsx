import "../../header.css"
import './newscard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Newsphoto from '../../assets/newsphoto.png'
import ArrowIcon from '../../assets/Icon-right.svg'





function NewsCard(){
    
    return(

   

 <div style={{maxWidth:"1392px", margin:"auto"}}>
         


     <div className="row" style={{marginTop:"40px"}}>
            <div className="col-4">
                <div className="NewsCard">
                <img src={Newsphoto} alt="Newsphoto" className="Newsphoto" style={{margin:'inherit', marginLeft:"15px"}} />
                    
                <h2>Kliniki Tibbi Mərkəz: Son iki ayda 36 nəfəri ilan sancıb</h2>
                       <p>Duis facilisis feugiat finibus. Sed molestie, justo non molestie feugiat,
                         dolor mi blandit ligula, id tristique dui elit et sem.</p>


                       <div className="Newstext">
                        <h6 className="Newtext">Xəbər / 17.04.24</h6>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="NewsContinue">
                                <span className="Newstext2" >Ətraflı</span>
                                <span><img src={ArrowIcon} alt="ArrowIcon" id='Newsicon' style={{ marginLeft: "83px", marginTop: "12px" }} /></span>
                            </a>
                            </div>
                        </div>
                   
                 
                    
                </div>
            </div>

            <div className="col-4"  >
                <div className="NewsCard">
                <img src={Newsphoto} alt="Newsphoto" className="Newsphoto" style={{margin:'inherit', marginLeft:"15px"}} />
                    
                    <h2>Kliniki Tibbi Mərkəz: Son iki ayda 36 nəfəri ilan sancıb</h2>
                    <p>Duis facilisis feugiat finibus. Sed molestie, justo non molestie feugiat,
                    dolor mi blandit ligula, id tristique dui elit et sem.</p>
                    <div className="Newstext">
                        <h6 className="Newtext">Xəbər / 17.04.24</h6>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="NewsContinue">
                                <span className="Newstext2" >Ətraflı</span>
                                <span><img src={ArrowIcon} alt="ArrowIcon" id='Newsicon' style={{ marginLeft: "83px", marginTop: "12px" }} /></span>
                            </a>
                            </div>
                        </div>
                   
                 
                    
                </div>
            </div>

            <div className="col-4"  >
                <div className="NewsCard">
                <img src={Newsphoto} alt="Newsphoto" className="Newsphoto" style={{margin:'inherit', marginLeft:"15px"}} />
                <h2>Kliniki Tibbi Mərkəz: Son iki ayda 36 nəfəri ilan sancıb</h2>
                <p>Duis facilisis feugiat finibus. Sed molestie, justo non molestie feugiat,
                dolor mi blandit ligula, id tristique dui elit et sem.</p>
                       <div className="Newstext">
                           <h6 className="Newtext">Xəbər / 17.04.24</h6>

                            <div style={{display:'flex', alignItems:'center'}}>
                            <a href="#" className="NewsContinue">
                                <span className="Newstext2" >Ətraflı</span>
                                <span><img src={ArrowIcon} alt="ArrowIcon" id='Newsicon' style={{ marginLeft: "83px", marginTop: "12px" }} /></span>
                            </a>
                            </div>
                        </div>
                   
                 
                    
                </div>
            </div>
     
    

            
            
            


        </div>
          

       


 </div>

      

    )
}

export default NewsCard