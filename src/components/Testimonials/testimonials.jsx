import '../../header.css'
import './testimonials.css'
import Comma from '../../assets/comma.svg'
import RedCircle from '../../assets/RedCircle.svg'
import WhiteComma from '../../assets/WhiteComma.svg'
import ArrowCircleRight from '../../assets/arrow-circle-right.svg'
import ArrowCircleLeft from '../../assets/arrow-circle-left.svg'

function Testimonials (){
    return(
        <div style={{backgroundColor:"#F0F6F9", height:'498px', marginTop:'120px', position:'relative'}}>


            <h1 className='TestimonialsTitle'>Testimonials</h1>
            <p className='TestimonialsText'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis,<br />
                semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>


            <div className="row" style={{marginTop:"70px", display:'flex', justifyContent:"center"}}>
             <div className="col-4" style={{ width:'400px'}} >
                <div className="TestimonialsCard">
                    <img src={Comma} alt="Comma" className='Comma' />
                  
                   <p className='TestimonialsCardText'> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t
                     he industrys standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled 
                     it to make a type specimen book.
                   </p>
                   <div className='BottomCircle'></div>
                       
                </div>
                <h6 className='CardTitle'>Name Surname</h6>
                <h6 className='CardText'>Student</h6>
                </div>

                <div className="col-4" style={{ width:'400px'}}>
                <div className="TestimonialsCard">
                <img src={Comma} alt="Comma" className='Comma' />
                   <p className='TestimonialsCardText'> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t
                     he industrys standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled 
                     it to make a type specimen book.
                   </p>
                   <div className='BottomCircle'></div>
                   
                       
                </div>
                <h6 className='CardTitle'>Name Surname</h6>
                <h6 className='CardText'>Student</h6>
                </div>

                <div className="col-4" style={{ width:'400px'}}>
                <div className="TestimonialsCard">
                <img src={Comma} alt="Comma" className='Comma' />
                   <p className='TestimonialsCardText'> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t
                     he industrys standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled 
                     it to make a type specimen book.
                   </p>
                   <div className='BottomCircle'></div>
                       
                </div>
                <h6 className='CardTitle'>Name Surname</h6>
                <h6 className='CardText'>Student</h6>
            </div>

            </div>

            <img src={RedCircle} alt="RedCircle" className='RedCircle' />

            <img src={WhiteComma} alt="WhiteComma" className='WhiteComma' />
            <a href="#">
            <img src={ArrowCircleRight} alt="ArrowCircleRight" className='ArrowCircleRight' />
            </a>
            <a href="#">
            <img src={ArrowCircleLeft} alt="ArrowCircleLeft" className='ArrowCircleLeft' />

            </a>
      


        </div>
    )

}

export default Testimonials

