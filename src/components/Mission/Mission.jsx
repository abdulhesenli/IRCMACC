import './mission.css'
import { useGetMissionQuery } from '../../store/Api/mission'
import Loading from '../Ui/Loading'

function Mission (){
    const {data, isLoading, isError} = useGetMissionQuery();
  

    let content;

    if(isError){
        content = "Xeta bas verdi";
    }else if(isLoading){
        content = <Loading/>
    }else{
        console.log(data.purposes);
        console.log(data.purposes);
        content = data.purposes.map((item, index)=> (
         <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <div className="MissionCard">
                <h2 className='text-custom fs-4 fs-5-xxl mt-3 line-clamp-2'>{item.header}</h2>
                   <p className='text-custom  fs-2-xxl mt-3'>  {item.body}
                    
                    </p>
        {/* </div>Tibb mütəxəssislərinin ixtisaslarının artırılması: */}
        </div>
    </div>
   
))

    }
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>

            

            <div className='Body-Title'>
                <h1 className='mis-title'>Missiya və Dəyərlər</h1>
                <p className='mis-text'>Beynəlxalq Tibb Tədqiqatları və Təlim Mərkəzinin yaradılması aşağıdakı
                əsas ideyalar və məqsədlərlə bağlı olmuşdur:</p>
            </div>


             <div className="Mission_Card row">
             {content}
            </div>

            <div className='Body-Title' style={{marginTop:'50px'}}>
                <p className='mis-text'>Bu ideyalar və məqsədlər Beynəlxalq Tibb Tədqiqatları və Təlim Mərkəzinin yaradılması və fəaliyyətinin əsasını təşkil edir və
                     qlobal sağlamlığın yaxşılaşdırılması və tibbi elmin inkişafına yönəlmişdir.</p>
            </div>
           
        
        </div>
  
        
    )
}

export default Mission