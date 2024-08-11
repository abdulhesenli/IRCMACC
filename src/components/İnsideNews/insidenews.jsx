import './insidenews.css'
import News from '../News/news'

import NewsImage from '../../assets/newsimage.svg'
import ArrorRight from '../../assets/arrow-circle-right.svg'
import ArrorLeft from '../../assets/arrow-circle-left.svg'
import Newsfacebook from '../../assets/Newsfacebook.svg';
import Newsinstagram from '../../assets/Newsinstagram.svg';
import Newslinkedin from '../../assets/Newslinkedin.svg';
import Newssubtract from '../../assets/NewsSubtract.svg';



function InsideNews (){
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>
            <div className='InsideNews-Title'>
                <h1 className='insidenews-title'>Aliquam mattis, sapien nec porta condimentum, tellus ex sagittis libero, at luctus metus lorem in nunc.</h1>
                <p className='insidenews-text'>
                    Curabitur fringilla, lorem eget malesuada pulvinar, lectus turpis dapibus orci, quis maximus erat massa eget enim. Etiam commodo laoreet congue. Fusce eu maximus massa. Aliquam euismod mollis venenatis. Sed fermentum, est eu faucibus scelerisque, erat libero hendrerit libero, eu laoreet odio urna in massa. Aenean congue purus purus, vel egestas nibh pretium in. Praesent ultrices ultrices turpis, rutrum lacinia ligula tincidunt ut. Vivamus ut mauris non quam iaculis pulvinar. Maecenas dapibus, lectus id ullamcorper ornare, quam felis vulputate risus, et consequat orci nulla at nisl. Sed a cursus turpis. Ut eget gravida magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id imperdiet arcu. Sed malesuada, enim fermentum efficitur viverra, diam velit tempus erat, ut euismod leo lorem quis nulla. Duis et faucibus eros. Praesent ut tincidunt urna. <br /> <br />

                    In hac habitasse platea dictumst. Donec in tortor at nisl sagittis eleifend. Integer dolor erat, laoreet sed dolor ut, fringilla sollicitudin tellus. Pellentesque eget vestibulum ante, vel accumsan sem. Quisque at ante sit amet libero posuere eleifend. Fusce blandit gravida laoreet. Mauris at pretium metus. Suspendisse ligula arcu, placerat in purus a, finibus volutpat massa. Aliquam in nulla sed tellus suscipit dignissim. <br /><br />
 
                    Nam sit amet libero sagittis, porta magna vitae, congue dui. Nunc et risus et nibh volutpat mattis ac sed diam. Nam in maximus leo. Aenean aliquam, nisl sit amet iaculis accumsan, mauris magna feugiat lacus, sit amet tempus tellus risus ac eros. Pellentesque commodo euismod lorem. Phasellus sit amet massa sit amet purus tincidunt posuere. Aliquam aliquet tortor ac ligula porta, in consequat purus accumsan.
                </p>
            </div>

            <div>
                <div className='InsideImage'>
                <img src={NewsImage} alt="NewsImage" />
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
                <div className='ContactIcon'>
                <a href="#"><img src={ArrorLeft} alt="ArrorLeft" /></a>
                <a href="#"><img src={ArrorRight} alt="ArrorRight" /></a>
                </div>
               

            </div>

            <News/>


            
            
           

            
            


        </div>
  
        
    )
}

export default InsideNews