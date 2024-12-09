import '../../header.css';
import './testimonials.css';
import Comma from '../../assets/comma.svg';
import RedCircle from '../../assets/RedCircle.svg';
import WhiteComma from '../../assets/WhiteComma.svg';
import ArrowCircleRight from '../../assets/arrow-circle-right.svg';
import ArrowCircleLeft from '../../assets/arrow-circle-left.svg';

import { useState } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const testimonials = [
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    },
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'Lorem Ipsum is simply dummy text with its roots in classical Latin literature.',
    },
    {
      name: 'Name Surname',
      title: 'Student',
      text: 'Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext(); // Sağdan sola kaydırma
    } else if (touchEndX - touchStartX > 50) {
      handlePrev(); // Soldan sağa kaydırma
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div id="TestsBG" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} style={{ userSelect: 'none' }}>
      <h1 className="TestimonialsTitle">Testimonials</h1>
      <p className="TestimonialsText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis,
        semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div id="Testimonials" className="row">
        <div className="col-4" style={{ width: '370px' }}>
          <div className="TestimonialsCard">
            <img src={Comma} alt="Comma" className="Comma" />
            <p className="TestimonialsCardText">{testimonials[(currentIndex) % testimonials.length].text}</p>
            <div className="BottomCircle"></div>
          </div>
          <h6 className="CardTitle">{testimonials[(currentIndex) % testimonials.length].name}</h6>
          <h6 className="CardText">{testimonials[(currentIndex) % testimonials.length].title}</h6>
        </div>

        <div className="col-4" style={{ width: '370px' }}>
          <div className="TestimonialsCard">
            <img src={Comma} alt="Comma" className="Comma" />
            <p className="TestimonialsCardText">{testimonials[(currentIndex + 1) % testimonials.length].text}</p>
            <div className="BottomCircle"></div>
          </div>
          <h6 className="CardTitle">{testimonials[(currentIndex + 1) % testimonials.length].name}</h6>
          <h6 className="CardText">{testimonials[(currentIndex + 1) % testimonials.length].title}</h6>
        </div>

        <div className="col-4" style={{ width: '370px' }}>
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

      <img src={RedCircle} alt="RedCircle" className="RedCircle" />
      <img src={WhiteComma} alt="WhiteComma" className="WhiteComma" />
    </div>
  );
}

export default Testimonials;
