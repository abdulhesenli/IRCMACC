import { useState } from "react";
import "./newscarousel.css"; // Stil dosyasını bağlayın
import ArrorRight from '../../assets/arrow-circle-right.svg';
import ArrorLeft from '../../assets/arrow-circle-left.svg';

const images = [
  "https://i.postimg.cc/wv0j2bCB/slide-1.jpg",
  "https://i.postimg.cc/Y00qsz7z/slide-2.jpg",
  "https://i.postimg.cc/PJ7rsvrs/slide-3.jpg",
  "https://i.postimg.cc/jdWS6cZs/slide-4.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalLength = images.length;

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLength);
  };

  const goBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalLength - 1 : prevIndex - 1
    );
  };

  return (
    <div className="MainCarousel">
      <main className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ left: `${index * 100}%` }}
          />
        ))}
      </main>
      <nav className="ContactIcon">
        <button onClick={goBack}><img src={ArrorLeft} alt="ArrorLeft" /></button>
        <button onClick={goNext}><img src={ArrorRight} alt="ArrorRight" /></button>
      </nav>
    </div>
  );
};

export default Carousel;
