import './about.css'
import Image from '../../assets/rehber.png'
// import {Helmet} from "react-helmet";
// import {useTranslation} from "react-i18next";
import { useGetCeoQuery } from '../../store/Api/ceo';
import Loading from '../Ui/Loading';


function About (){
    // const {t} = useTranslation()
    const {data,isLoading,isError} =useGetCeoQuery();

    let content;

    if (isError) {
        content = "Xeta bas verdi";
      } else if (isLoading) {
        content = <Loading />;
      } else {
        const ceo = data["ceo-text"];
        content =
        <div style={{maxWidth: '1392px', margin: 'auto'}}>
        <div className='About-Title'>
            <h1 className='about-title'>Rəhbərin müraciəti</h1>
            <p className='about-text'>{ceo.position}</p>
            <h2 className='Name-title'>{ceo.fullname}</h2>
        </div>

        <div className=' about'>
            
            <div className='aboutcircle'>
                <img src={Image} alt="Image" className='AboutImage' />

            </div>
            <div className='AboutText2'>
            <p className='aboutText2'> {ceo.title} </p>
                {/* <p className='aboutText2'>Rəşad Fərhad oğlu Şolan (Məmmədov Rəşad Fərhad oğlu; 27 iyun 1980,
                    İmişli rayonu ) —
                    cərrah-uroloq, transplantoloq, Amerika Uroloqlar Assosiasiyasının və Avropa Uroloqlar
                    Assosiasiyasının araşdırmaçı üzvü, “Böyrək Transplantasiyası üzrə Mütəxəssislər
                    Assosiasiyası”nın İdarə Heyətinin sədri, Azərbaycan Respublikası Səhiyyə Nazirliyinin böyrək
                    transplantasiyası üzrə baş mütəxəssisi (2019–2021), Azərbaycan Respublikası Səhiyyə
                    Nazirliyinin orqan transplantasiyası üzrə mütəxəssis eksperti, Respublika Diaqnostika
                    Mərkəzinin “Böyrək xəstəlikləri və transplantologiya” şöbəsinin müdiri (2017–2023), AMEA A.
                    Qarayev adına Fiziologiya İnstitutunun “İmmunofiziologiya və eksperimental
                    transplantologiya”
                    laboratoriyasının müdiri, Dövlət Təhlükəsizliyi Xidməti, Hərbi-Tibb Baş İdarəsi, Elmi
                    Təcrübə
                    Mərkəzinin rəsi, eyni zamanda DTX HTBİ Hərbi Hospitalının “Böyrək Xəstəlikləri və Orqan
                    Transplantasiyası” şöbəsinin rəhbəri, tibb üzrə fəlsəfə doktoru.</p> */}
            </div>
        </div>
        <div className='abouttext3'> {ceo.text} </div>
       
    </div>
  
    }

    return(
        <>
            <div>
            {content}
            </div>
        </>
    )
}

export default About