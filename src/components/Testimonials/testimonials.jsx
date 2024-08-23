import '../../header.css'
import './testimonials.css'
import Comma from '../../assets/comma.svg'
import RedCircle from '../../assets/RedCircle.svg'
import WhiteComma from '../../assets/WhiteComma.svg'
import ArrowCircleRight from '../../assets/arrow-circle-right.svg'
import ArrowCircleLeft from '../../assets/arrow-circle-left.svg'

function Testimonials (){
    return(
        <div id='TestsBG' style={{backgroundColor:"#F0F6F9", height:'px', marginTop:'120px', position:'relative'}}>


            <h1 className='TestimonialsTitle'>Testimonials</h1>
            <p className='TestimonialsText'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis,<br />
                semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>


            <div id='Testimonials' className="row" style={{display:'flex', justifyContent:"center"}}>
             
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
            <a href="#">
            <img src={ArrowCircleRight} alt="ArrowCircleRight" className='ArrowCircleRight' />
            </a>
            <a href="#">
            <img src={ArrowCircleLeft} alt="ArrowCircleLeft" className='ArrowCircleLeft' />

            </a>
            </div>

            <img src={RedCircle} alt="RedCircle" className='RedCircle' />

            <img src={WhiteComma} alt="WhiteComma" className='WhiteComma' />
           
      


        </div>
    )

}

export default Testimonials



// import { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const CarouselComponent = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       image: 'https://via.placeholder.com/400x300',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis, semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       name: 'John Doe',
//       title: 'Student'
//     },
//     {
//       image: 'https://via.placeholder.com/400x300',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis, semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       name: 'Jane Doe',
//       title: 'Teacher'
//     },
//     {
//       image: 'https://via.placeholder.com/400x300',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis, semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       name: 'Bob Smith',
//       title: 'Developer'
//     }
//   ];

//   const handlePrev = () => {
//     setCurrentIndex(currentIndex - 1);
//   };

//   const handleNext = () => {
//     setCurrentIndex(currentIndex + 1);
//   };

//   return (
//     <div className="carousel-container">
//       <Carousel
//         showArrows={true}
//         onChange={index => setCurrentIndex(index)}
//         selectedItem={currentIndex}
//       >
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="carousel-item">
//             <img src={testimonial.image} alt={testimonial.name} />
//             <div className="carousel-text">
//               <p>{testimonial.text}</p>
//               <h6>{testimonial.name}</h6>
//               <h6>{testimonial.title}</h6>
//             </div>
//           </div>
//         ))}

        
//       </Carousel>
//       <button className="prev" onClick={handlePrev}>
//         <img src={ArrowCircleLeft} alt="Previous" />
//       </button>
//       <button className="next" onClick={handleNext}>
//         <img src={ArrowCircleRight} alt="Next" />
//       </button>
//     </div>
//   );
// };

// export default CarouselComponent;