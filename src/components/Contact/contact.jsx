import './contact.css'
import Send from '../../assets/send-03.svg'
import Location from '../../assets/location.svg'
import Phonecall from '../../assets/phonecall.svg'
import Mail from '../../assets/mail.svg'

function Contact (){
    return(
        <div style={{maxWidth:'1392px', margin:'auto'}}>
            <div className='Contact-Title'>
                <h1 className='contact-title'>Bizimlə əlaqə</h1>
                <p className='contact-text'>Sual, təklif və şikayətlərinizi bizə yazın. Müraciətiniz bizim üçün önəmlidir!</p>
            </div>


            <div className='Contactregister'>
            <form className='ContactForm'>
              <div className="form-group">
       
                <input type="text" name="name" id="name" style={{marginBottom:'10px'}} placeholder="Ad, Soyad"/>
                <input type="text" name="text" id="text" style={{marginBottom:'10px'}}  placeholder=" +994 00 000 00 00"/>
                <input type="email" name="email" id="email" placeholder=" E-mail"/>
                <textarea name="textarea" id="textarea" placeholder='Mesajınız'></textarea>

            </div>
        
            <button type="submit" className='ContactBtn'>Göndər <img src={Send} alt="Send" style={{marginLeft:'10px'}} /> </button>
        </form>
            </div>

            <div className='Adress'>
                <div className='adress-text'>
                   <img src={Location} alt="Location" id='Location' className='contactimg' />
                   <p className="adress-text1">Ünvan</p>
                   <h1 className="adress-title" >Zərifə Əliyeva 55, <br />
                   Yeni Həyat Plaza, 4-cü mərtəbə</h1>

                </div>
                <div className='adress-text'>
                   <img src={Phonecall} alt="Phonecall" id='Phonecall' className='contactimg' />
                   <p className="adress-text1">Telefon</p>
                   <h1 className="adress-title" >+994 00 123 45 67</h1>

                </div>
                <div className='adress-text'>
                   <img src={Mail} alt="Phonecall" id='Phonecall' className='contactimg'  />
                   <p className="adress-text1">Elektron poçt</p>
                   <h1 className="adress-title" >info@irtmac.az</h1>

                </div>

            </div>

            
            


        </div>
  
        
    )
}

export default Contact