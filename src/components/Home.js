import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/Home.css';
import image1 from './features/images/blogs-img-4.jpg';
import image2 from './features/images/blogs-img-4.jpg';
import image3 from './features/images/blogs-img-4.jpg';

const words = ['Entertainment', 'Pleasure', 'Enjoyment'];
function Home() {
  const [currentWord, setCurrentWord] = useState('Entertainment');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(oldWord => {
        const index = words.indexOf(oldWord);
        return words[(index + 1) % words.length];
      });
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          autoplay: true,
        }
      }
    ]
  };

  return (
    <div>
      <h2 className='head2'>Building Mobile Gaming Worlds</h2>
      <h1 className='head1'>We craft games <br />
        <span className='fade'>{currentWord}</span>
      </h1>
      <p className='intro'> Developing games that are imaginative, fun and bringing colors to the gaming world </p>
      <Link to="/games" className='Glink'>Explore our Games</Link>
      <Slider {...settings}>
        <div>
          <img className='image1' src={image1} alt="description_1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img className='image1' src={image2} alt="description_2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img className='image1' src={image3} alt="description_3" />
          <p className="legend">Legend 3</p>
        </div>
      </Slider> 
    </div>
  );
}

export default Home;