// import  from "react";
import { useState, useEffect } from 'react';
// import "../../header.css"
// import './home.css'
import '../home/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetMainPageQuery } from '../../store/Api/mainpage';
import Loading from '../Ui/Loading';





function Box(){
    const {data, isLoading,isError } = useGetMainPageQuery();
    const [counter, setCounter] = useState(0);
    let content;

    if (isError) {
      content = "Xeta bas verdi";
    } else if (isLoading) {
      content = <Loading />;
    } else if (data && data.statistic) {
      const { title, text, stat1, stat2, stat3, stat4, name1, name2, name3, name4 } = data.statistic;
    
      content = (
        <div id="HomeGroup" className="HomeGroup" style={{ height: "365px" }}>
          <div className="HomeBox">
            
            <h1 className="title">{title}</h1>
            <p className="title1">{text}</p>
          </div>
    
          <div className="box row">
            <div className="inbox col-6">
              <h1 className="boxtext">{stat1}</h1>
              <p className="boxtext1">{name1}</p>
            </div>
            <div className="inbox col-6">
              <h1 className="boxtext">{stat2}</h1>
              <p className="boxtext1">{name2}</p>
            </div>
            <div className="inbox col-6">
              <h1 className="boxtext">{stat3}</h1>
              <p className="boxtext1">{name3}</p>
            </div>
            <div className="inbox col-6">
              <h1 className="boxtext">{stat4}</h1>
              <p className="boxtext1">{name4}</p>
            </div>
            <div className="line"></div>
            <hr className="line2" />
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
        <div className='Counterbox' style={{marginTop:"80px"}}>
         
         <div id="home">

         {content}
        
        </div>
        </div>
    )
}

export default Box

