import '../../header.css';
import './testimonials.css';
import Comma from '../../assets/comma.svg';
import RedCircle from '../../assets/RedCircle.svg';
import WhiteComma from '../../assets/WhiteComma.svg';
import ArrowCircleRight from '../../assets/arrow-circle-right.svg';
import ArrowCircleLeft from '../../assets/arrow-circle-left.svg';
import { useGetTestimonilasQuery } from '../../store/Api/testimonials';
import Loading from '../Ui/Loading';

import { useState } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading, isError } = useGetTestimonilasQuery();

  let content;

  if (isError) {
    content = <p>Xeta bas verdi</p>;
  } else if (isLoading) {
    content = <Loading />;
  } else {
    const testimonials = data.testimonials || [];

    // Görünür kartları belirle
    const visibleTestimonials = testimonials.slice(
      currentIndex,
      currentIndex + 3
    );

    if (visibleTestimonials.length < 3) {
      visibleTestimonials.push(
        ...testimonials.slice(0, 3 - visibleTestimonials.length)
      );
    }

    content = visibleTestimonials.map((item, index) => (
      <div className="col-4" style={{ width: '370px' }} key={index}>
        <div className="TestimonialsCard">
          <img src={Comma} alt="Comma" className="Comma" />
          <p className="TestimonialsCardText">{item.desc}</p>
          <div className="BottomCircle"></div>
        </div>
        <h6 className="CardTitle">{item.name1}</h6>
        <h6 className="CardText">{item.name2}</h6>
      </div>
    ));
  }

  const handleNext = () => {
    if (data?.testimonials) {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % data.testimonials.length
      );
    }
  };

  const handlePrev = () => {
    if (data?.testimonials) {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + data.testimonials.length) % data.testimonials.length
      );
    }
  };

  return (
    <div id="TestsBG" style={{ userSelect: 'none' }}>
      <h1 className="TestimonialsTitle">Testimonials</h1>
      <p className="TestimonialsText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa nisl, porta ac erat quis,
        semper sollicitudin mi Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div id="Testimonials" className="row">
        {content}

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