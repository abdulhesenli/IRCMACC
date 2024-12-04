import './telimcidaxili.css'
import TelimciImg from '../../assets/doctor1.svg'





function TelimciDaxili(){
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>

            <div id='TelimciDaxili'>
            <div className='Telimciimg'>
                <img src={TelimciImg} alt="TelimciImg" className='TelimciImg'/>

            </div>
            <div className='Intelimci-Title'>
                <h1 className='intelimci-title'>Rəşad Şolan</h1>
                <p className='intelimci-text'> Beynəlxalq Tibb Tədqiqatları və Təlim Mərkəzi - tanınmış cərrah və uroloq, Tibb Elmləri Doktoru</p>
               
            </div>
            </div>

            <div className='Intelimci-Text'>
                <p className='intelimci-text' >Eksperimental təlim və tədqiqatlarda t.e.d. Rəşad Şolan böyük təcrübəyə sahibdir. Belə ki, elmi fəaliyyəti boyunca daha çox eksperimental tədqiqatlara üstünlük verməklə yanaşı heyvan üzərində müxtəlif cərrahi təlim modellərini işləyib hazırlamışdır.</p>
            </div>
           


        </div>
  
        
    )
}

export default TelimciDaxili