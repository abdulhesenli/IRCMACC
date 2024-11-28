import './contact.css'
import '../../res.css'
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

              <div className="form-group groupone">
                <input type="text" name="name" id="name" style={{marginBottom:'10px'}} placeholder="Ad, Soyad"/>
                <input type="text" name="text" id="text" style={{marginBottom:'10px'}}  placeholder=" +994 00 000 00 00"/>
                <input type="email" name="email" id="email" placeholder=" E-mail"/>
                </div>

                <div className="form-group">
                <textarea name="textarea" id="textarea" placeholder='Mesajınız'></textarea>
                <button type="submit" className='ContactBtn'>Göndər <img src={Send} alt="Send" style={{marginLeft:'10px'}} /> </button>

                </div>
        
            </form>
            </div>

            <div className='Adress'>
                <div className='adress-text' style={{marginLeft:"100px"}}>
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

            <div style={{position:"relative"}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12156.609233436639!2d49.861909999999995!3d40.38331685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db76b4bb377%3A0xd02c5ca432b069fd!2sSharg%20restaurant!5e0!3m2!1sru!2saz!4v1723662080569!5m2!1sru!2saz"
                    width="1392" height="583" style={{border : 0, marginTop:'50px', borderRadius:"20px", position:"relative"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" className='map'>

                    </iframe>

                    <div className='WorkTime'>
                   <h1 className='WorkTimeText'> İş qrafiki: B.e. - Cümə / 09:00 - 18:00</h1>
                    </div>
            </div>


        </div>


    )
}

export default Contact