import '../../header.css';
import './footer.css'
import Fcb from '../../assets/facebook.svg';
import Inst from '../../assets/instagram.svg';
import Yout from '../../assets/youtube.svg';
import linke from '../../assets/linkedin.svg';



function Footer (){
    return(



        <div id='footer'>
                <h1 className='Footertext'>
                Bütün hüquqlar qorunur. IRTMAC 2024
                </h1>

                <div>
                    <ul>
                        <li><a href="#"><img src={Fcb} alt="Fcb" className='Fcb' /></a></li>
                        <li><a href="#"><img src={Inst} alt="Inst" className='Inst' /></a></li>
                        <li><a href="#"><img src={Yout} alt="Yout" className='Yout' /></a></li>
                        <li><a href="#"><img src={linke} alt="linke" className='linke' /></a></li>
                    </ul>
                </div>
        </div>
    )
}

export default Footer