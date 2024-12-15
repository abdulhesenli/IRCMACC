import './insidenews.css'
import News from '../News/News'
import Newsfacebook from '../../assets/Newsfacebook.svg';
import Newsinstagram from '../../assets/Newsinstagram.svg';
import Newslinkedin from '../../assets/Newslinkedin.svg';
import Newssubtract from '../../assets/NewsSubtract.svg';
import NewsCarousel from '../NewsCarousel/NewsCarousel'
import { useParams } from 'react-router-dom'
import { useGetNewsSingleQuery } from '../../store/Api/news';
import Loading from '../Ui/Loading';




function InsideNews (){
    const {id}=useParams()

    const {data,isError,isLoading}=useGetNewsSingleQuery(id);
    let content;

    if(isError){
       content = "Xeta bas verdi";
    }else if(isLoading){
        content = <Loading/>
    }else{
        <div className='InsideNews-Title'>
        <h1 className='insidenews-title'>{data.blog.name}</h1>
        <p className='insidenews-text'>
        {data.blog.short_title}
        </p>
    </div>
    }



    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>
            {content}

            <div className='InsideImage'>
                
                    <NewsCarousel/>
             
                <div className='ContactSosial'>
                    <h1 className='sosialtext'>Paylaş</h1>
                    <ul>
                        <li> <a href="#"><img src={Newsfacebook} alt="Newsfacebook" /></a></li>
                        <li> <a href="#"><img src={Newsinstagram} alt="Newsinstagram" /></a></li>
                        <li> <a href="#"><img src={Newslinkedin} alt="Newslinkedin" /></a></li>
                        <li> <a href="#"><img src={Newssubtract} alt="Newssubtract" /></a></li>
                    </ul>
                </div>
               

            </div>

            <News/>


            
            
           

            
            


        </div>
  
        
    )
}

export default InsideNews