// import '../../header.css'
// import './testimonials.css'
// import Comma from '../../assets/comma.svg'
// import RedCircle from '../../assets/RedCircle.svg'
// import WhiteComma from '../../assets/WhiteComma.svg'
// import ArrowCircleRight from '../../assets/arrow-circle-right.svg'
// import ArrowCircleLeft from '../../assets/arrow-circle-left.svg'


// function Testimonials (){
//     return(
//         <div id='TestsBG'>


//             <h1 className='TestimonialsTitle'>Testimonials</h1>
//             <p className='TestimonialsText'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis,<br />
//                 semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>

// {
//             <div id='Testimonials' className="row" style={{display:'flex', justifyContent:"center"}}>
             
//              <div className="col-4" style={{ width:'400px'}} >
//                 <div className="TestimonialsCard">
//                     <img src={Comma} alt="Comma" className='Comma' />
                  
//                    <p className='TestimonialsCardText'> 
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t
//                      he industrys standard dummy text ever since the 1500s,
//                      when an unknown printer took a galley of type and scrambled 
//                      it to make a type specimen book.
//                    </p>
//                    <div className='BottomCircle'></div>
                       
//                 </div>
//                 <h6 className='CardTitle'>Name Surname</h6>
//                 <h6 className='CardText'>Student</h6>
//                 </div>

//                 <div className="col-4" style={{ width:'400px'}}>
//                 <div className="TestimonialsCard">
//                 <img src={Comma} alt="Comma" className='Comma' />
//                    <p className='TestimonialsCardText'> 
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t
//                      he industrys standard dummy text ever since the 1500s,
//                      when an unknown printer took a galley of type and scrambled 
//                      it to make a type specimen book.
//                    </p>
//                    <div className='BottomCircle'></div>
                   
                       
//                 </div>
//                 <h6 className='CardTitle'>Name Surname</h6>
//                 <h6 className='CardText'>Student</h6>
//                 </div>

//                 <div className="col-4" style={{ width:'400px'}}>
//                 <div className="TestimonialsCard">
//                 <img src={Comma} alt="Comma" className='Comma' />
//                    <p className='TestimonialsCardText'> 
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t
//                      he industrys standard dummy text ever since the 1500s,
//                      when an unknown printer took a galley of type and scrambled 
//                      it to make a type specimen book.
//                    </p>
//                    <div className='BottomCircle'></div>
                       
//                 </div>
//                 <h6 className='CardTitle'>Name Surname</h6>
//                 <h6 className='CardText'>Student</h6>
//             </div>
//             <a href="#">
//             <img src={ArrowCircleRight} alt="ArrowCircleRight" className='ArrowCircleRight' />
//             </a>
//             <a href="#">
//             <img src={ArrowCircleLeft} alt="ArrowCircleLeft" className='ArrowCircleLeft' />

//             </a>
//             </div> }

//             <img src={RedCircle} alt="RedCircle" className='RedCircle' />

//             <img src={WhiteComma} alt="WhiteComma" className='WhiteComma' />


           
      


//         </div>
//     )

// }

// export default Testimonials
import '../../header.css';
import './testimonials.css';
import '../../res.css'
import Comma from '../../assets/comma.svg';
import RedCircle from '../../assets/RedCircle.svg';
import WhiteComma from '../../assets/WhiteComma.svg';
import ArrowCircleRight from '../../assets/arrow-circle-right.svg';
import ArrowCircleLeft from '../../assets/arrow-circle-left.svg';

import { useState } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'loe industry standard dummy text ever sintype and scrambled it to make a type specimen book.',
    },
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'ndustry standard dummy text ever since the 1500s, when an unknown ed it to make a type specimen book.',
    },

    {
      name: 'Name Surname',
      title: 'Student',
      text: 'lorem Ipsum ithe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'lorem Ipsum is simply  Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="TestsBG">
      <h1 className="TestimonialsTitle">Testimonials</h1>
      <p className="TestimonialsText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis,
        semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div id="Testimonials" className="row" style={{ display: 'flex', justifyContent: 'center' }}>
        {/* 3 Kartın Görünmesini Sağlama */}
        <div className="col-4" style={{ width: '400px' }}>
          <div className="TestimonialsCard">
            <img src={Comma} alt="Comma" className="Comma" />
            <p className="TestimonialsCardText">{testimonials[(currentIndex) % testimonials.length].text}</p>
            <div className="BottomCircle"></div>
          </div>
          <h6 className="CardTitle">{testimonials[(currentIndex) % testimonials.length].name}</h6>
          <h6 className="CardText">{testimonials[(currentIndex) % testimonials.length].title}</h6>
        </div>

        <div className="col-4" style={{ width: '400px' }}>
          <div className="TestimonialsCard">
            <img src={Comma} alt="Comma" className="Comma" />
            <p className="TestimonialsCardText">{testimonials[(currentIndex + 1) % testimonials.length].text}</p>
            <div className="BottomCircle"></div>
          </div>
          <h6 className="CardTitle">{testimonials[(currentIndex + 1) % testimonials.length].name}</h6>
          <h6 className="CardText">{testimonials[(currentIndex + 1) % testimonials.length].title}</h6>
        </div>

        <div className="col-4" style={{ width: '400px' }}>
          <div className="TestimonialsCard">
            <img src={Comma} alt="Comma" className="Comma" />
            <p className="TestimonialsCardText">{testimonials[(currentIndex + 2) % testimonials.length].text}</p>
            <div className="BottomCircle"></div>
          </div>
          <h6 className="CardTitle">{testimonials[(currentIndex + 2) % testimonials.length].name}</h6>
          <h6 className="CardText">{testimonials[(currentIndex + 2) % testimonials.length].title}</h6>
        </div>
        <div className="carousel-controls">
        <a href="#" onClick={(e) => { e.preventDefault(); handlePrev(); }}>
          <img src={ArrowCircleLeft} alt="ArrowCircleLeft" className="ArrowCircleLeft" />
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNext(); }}>
          <img src={ArrowCircleRight} alt="ArrowCircleRight" className="ArrowCircleRight" />
        </a>
      </div>
      </div>

      {/* Sağ ve Sol Oklar */}
      {/* <div className="carousel-controls">
        <a href="#" onClick={(e) => { e.preventDefault(); handlePrev(); }}>
          <img src={ArrowCircleLeft} alt="ArrowCircleLeft" className="ArrowCircleLeft" />
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNext(); }}>
          <img src={ArrowCircleRight} alt="ArrowCircleRight" className="ArrowCircleRight" />
        </a>
      </div> */}

      <img src={RedCircle} alt="RedCircle" className="RedCircle" />
      <img src={WhiteComma} alt="WhiteComma" className="WhiteComma" />
    </div>
  );
}

export default Testimonials;
