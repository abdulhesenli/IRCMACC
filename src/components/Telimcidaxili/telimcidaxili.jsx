import './telimcidaxili.css'
import TelimciImg from '../../assets/doctor1.svg'
import { useParams } from 'react-router-dom'
import { useGetMentorSingleQuery } from '../../store/Api/mentor'
import Loading from "../Ui/Loading.jsx";

  




function TelimciDaxili(){

    const {id}=useParams()
    const {data,isError,isLoading}=useGetMentorSingleQuery(id);

    let content;

    if(isError){
        content = "Xeta bas verdi";
     }else if(isLoading){
         content = <Loading/>
     }else{
        content=<div style={{maxWidth:'1392px', margin:'auto'}}>

        <div id='TelimciDaxili'>

        <div className='Telimciimg'>
            <img src={TelimciImg} alt="TelimciImg" className='TelimciImg'/>

        </div>
        
        <div className='Intelimci-Title'>
            <h1 className='intelimci-title'>{data.trainers.name1}</h1>
            <p className='intelimci-text'>{data.trainers.name3}</p>
           
        </div>
        
        </div>

        <div className='Intelimci-Text'>
            <p className='intelimci-text' >{data.trainers.description}</p>
        </div>
       


    </div>
        
     }
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>
        {content}
        </div>
       
  
        
    )
}

export default TelimciDaxili