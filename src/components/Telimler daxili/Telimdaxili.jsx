import { useParams } from 'react-router-dom'
import { useGetEducationSingleQuery } from '../../store/Api/education'
import './telimdaxili.css'
import Loading from "../Ui/Loading.jsx";
function Telimdaxili (){
    const {id}=useParams()
    const {data,isError,isLoading}=useGetEducationSingleQuery(id);
    let content;

    if(isError){
       content = "Xeta bas verdi";
    }else if(isLoading){
        content = <Loading/>
    }else{
        content=<div style={{maxWidth:'1392px', margin:'auto'}}>
        <div className='TelimDaxili-Title'>
            <h1 className='telim-title'> {data.training.title} </h1>
        </div>
            {/* <div dangerouslySetInnerHTML={{__html:data.training.description}} /> */}
        <div style={{textAlign:'center'}}>
                <button className='Telimbtn'>“ Laparoskopik Nefrektomiya” təlimi</button>
                <button className='Telimbtn'>“ Laparoskopik Parsial Nefrektomiya” təlimi</button>
           
        </div>

        <table id='table'>
            <tr>
                <td style={{width:'212px', backgroundColor:'#F0F6F9', borderRadius:"20px 0 0 0 "}}>1-ci gün</td>
                <td style={{width:'802px'}}>Xüsusi təlim qutularında laparoskopik cərrahi bacarıqların təlimi</td>
                <td>1-ci gün</td>
            </tr>

            <tr>
                <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>2-ci gün</td>
                <td>Xüsusi təlim qutularında laparoskopik tikiş və düyün texnikalarının öyrənilməsi</td>
                <td>2-ci gün</td>
            </tr>

            <tr>
                <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>3-ci gün</td>
                <td>Xüsusi təlim qutularında laparoskopik tikiş və düyün texnikalarıni boru modelinde öyrənilməsi
                (laparoskoipik anastomoz texnikaları)</td>
                <td>3-ci gün</td>
            </tr>

            <tr>
                <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>4-ci gün</td>
                <td>Toxuma üzərində laparoskopik disseksiya və tikiş təlimi təlimi</td>
                <td>4-ci gün</td>
            </tr>

            <tr>
                <td style={{width:'212px', backgroundColor:'#F0F6F9'}}>5-ci gün</td>
                <td>Canlı heyvan üzərində ( donuz vəya qoyun ) laparoskopik nefrektomiya əməliyyatının icrası</td>
                <td>5-ci gün</td>
            </tr>
        </table>
         </div>   
    }

    return(
        <>
          {content}
        </>
     
    )
}

export default Telimdaxili