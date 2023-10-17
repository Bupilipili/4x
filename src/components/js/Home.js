import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/Home.css';
import image1 from '../images/blogs-img-4.jpg';
import image2 from '../images/blogs-img-4.jpg';
import image3 from '../images/blogs-img-4.jpg';
import image4 from '../images/appstore.png';
import image5 from '../images/googleplay.png';
import image6 from '../images/top-bottom.png';

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
    autoplaySpeed: 5000,
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
          dots: false,
          arrows: false,
          infinite: true,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
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
      <div className='feature'>
      <img className='image3' src={image6}/>
        <p className='intro2'>Featured Games</p>
        </div>
      <Slider {...settings}>
        <div>
          <img className='image1' src={image1} alt="description_1" />
          <div className='getit'>
          <img className='image2' src={image4}/>
          <img className='image2' src={image5}/>
          </div>
        </div>
        <div>
          <img className='image1' src={image2} alt="description_2" />
          <div className='getit'>
          <img className='image2' src={image4}/>
          <img className='image2' src={image5}/>
          </div>
        </div>
        <div>
          <img className='image1' src={image3} alt="description_3" />
          <div className='getit'>
          <img className='image2' src={image4}/>
          <img className='image2' src={image5}/>
          </div>
        </div>
      </Slider>
    <h3>Welcome to 4le Studios</h3>
    <h4>Bringing people together through the power of play</h4>
    </div>
  );
}

export default Home;