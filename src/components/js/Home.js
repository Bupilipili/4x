import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Home.css';
import image4 from '../images/appstore.png';
import image5 from '../images/googleplay.png';
import image6 from '../images/top-bottom.png';
import image7 from '../images/character.jpeg';
import image8 from '../images/anime.jpg';
import image9 from '../images/team-members-2.jpg';
import image10 from '../images/team-members-4.jpg';
import image11 from '../images/life-post-img-4.jpg';
import image12 from '../images/gallery-img-8.png';

const words = ['Entertainment', 'Pleasure', 'Enjoyment'];
function Home() {
  const [currentWord, setCurrentWord] = useState('Entertainment');
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(oldWord => {
        const index = words.indexOf(oldWord);
        return words[(index + 1) % words.length];
      });
    }, 3000); // Change word every 3 seconds

    const animationInterval = setInterval(() => {
      setCount(oldCount => {
        if (oldCount < 500) {
          return oldCount + 10;
        } else {
          clearInterval(animationInterval);
          return oldCount;
        }
      });
    }, 7); // Increment count every 7 milliseconds

    const animationInterval2 = setInterval(() => {
      setCount2(oldCount => {
        if (oldCount < 2) {
          return oldCount + 1;
        } else {
          clearInterval(animationInterval2);
          return oldCount;
        }
      });
    }, 1000); // Increment count2 every 1 second

    const animationInterval3 = setInterval(() => {
      setCount3(oldCount => {
        if (oldCount < 50) {
          return oldCount + 5;
        } else {
          clearInterval(animationInterval3);
          return oldCount;
        }
      });
    }, 2); // Increment count3 every 2 millisecond

    const animationInterval4 = setInterval(() => {
      setCount4(oldCount => {
        if (oldCount < 4) {
          return oldCount + 1;
        } else {
          clearInterval(animationInterval3);
          return oldCount;
        }
      });
    }, 1000); // Increment count3 every 1 seconds

    return () => {
      clearInterval(interval);
      clearInterval(animationInterval);
      clearInterval(animationInterval2);
      clearInterval(animationInterval3);
      clearInterval(animationInterval4);
    }; // Clean up on component unmount
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
          dots: true,
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

  const settings2 = {
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
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
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 5000
        }
      }
    ]

  };

  return (
    <div className='Home'>
      <h2 className='head2'>Building Mobile Gaming Worlds</h2>
      <h1 className='head1'>We craft games <br />
        <span className='fade'>{currentWord}</span>
      </h1>
      <p className='intro'> Developing games that are imaginative, fun and bringing colors to the gaming world </p>
      <Link to="/games" className='Glink'>Explore our Games</Link>
      <div className='feature'>
        <img className='image3' src={image6} />
        <p className='intro2'>Featured Games</p>
      </div>
      <Slider {...settings}>
        <div>
          <img className='image1' src={image7} alt="description_1" />
          <div className='getit'>
            <img className='image2' src={image4} />
            <img className='image2' src={image5} />
          </div>
        </div>
        <div>
          <img className='image1' src={image7} alt="description_2" />
          <div className='getit'>
            <img className='image2' src={image4} />
            <img className='image2' src={image5} />
          </div>
        </div>
        <div>
          <img className='image1' src={image7} alt="description_3" />
          <div className='getit'>
            <img className='image2' src={image4} />
            <img className='image2' src={image5} />
          </div>
        </div>
      </Slider>
      <div className='part2'>
        <h3 className='head3'>Welcome to <span className='sub3'>4le Studios</span></h3>
        <h4 className='head4'>Bringing people together through <span className='sub3'>the power of play</span></h4>
        <p className='intro3'> As 4le Studios, we continue to open doors to new worlds every day and we are working excitedly for creating new games and unique ideas! </p>
        <p className='number'>{count}<span className='plus'><FaPlus /></span></p>
        <p className='intro4'>Downloads, or 6% of the world’s population.</p>
        <div className='bar'></div>
        <p className='number'>{count2}M<span className='plus'><FaPlus /></span></p>
        <p className='intro4'>Our games have over 20 million unique daily users..</p>
        <div className='bar'></div>
        <p className='number'>{count3}<span className='plus'><FaPlus /></span></p>
        <p className='intro4'>Experts collaborating to blow your mind in one place.</p>
        <div className='bar'></div>
        <p className='number'>{count4}K<span className='plus'><FaPlus /></span></p>
        <p className='intro4'>The 4le Studios is launching with 4K+ Games.</p>
        <div className='bar'></div>
        <Link to="/games" className='Glink2'>Explore our Games</Link>
      </div>
      <h4 className='head5'>Crafting Unforgettable<span className='sub4'> Gaming Experiences</span></h4>
      <h4 className='head6'>Our Games are<span className='sub4'> Vibrant</span> Worlds With <span className='sub3'>Charming</span> Characters</h4>
      <div className="main-grid">
        <div className="flex1">
          <img className='icon' src={image8} />
          <div className='exp'>
            <p className='head7'>Lorem Ipsum</p>
            <p className='genre'>Action <span>|</span> Horror <span>|</span> Mobile <span>|</span> Adventure</p>
            <p className='words'> Mauris euismod nibh mollis sodales eleifend. Donec tempor erat risus, nec congue magna accumsan commodo pretium.. </p>
          </div>
        </div>
        <div className="flex1">
          <img className="icon" src={image8} />
          <div className='exp'>
            <p className='head7'>Lorem Ipsum</p>
            <p className='genre'>Action <span>|</span> Horror <span>|</span> Mobile <span>|</span> Adventure</p>
            <p className='words'> Mauris euismod nibh mollis sodales eleifend. Donec tempor erat risus, nec congue magna accumsan commodo pretium.. </p>
          </div>
        </div>
        <div className="flex1">
          <img className="icon" src={image8} />
          <div className='exp'>
            <p className='head7'>Lorem Ipsum</p>
            <p className='genre'>Action <span>|</span> Horror <span>|</span> Mobile <span>|</span> Adventure</p>
            <p className='words'> Mauris euismod nibh mollis sodales eleifend. Donec tempor erat risus, nec congue magna accumsan commodo pretium.. </p>
          </div>
        </div>
      </div>
      <div className='part3'>
        <h4 className='head5'>We have passion for<span className='sub4'> Games!</span></h4>
        <h4 className='head6'> Our team is next-level. And we&apos;re<span className='sub4'> proud of it.</span></h4>
        <p className='intro5'> Our dynamic team blends tech-savvy developers, imaginative artists, analytical minds, and visionary product managers. Driven to innovate, we bring excitement to every project </p>
        <Slider {...settings2}>
          <div>
            <img className='image9' src={image9} alt="description_1" />
            <p className='head7'>Peter Parker<br /><span className='intro6'>Artist</span></p>
          </div>
          <div>
            <img className='image9' src={image10} alt="description_2" />
            <p className='head7'>Peter Parker<br /><span className='intro6'>Artist</span></p>
          </div>
          <div>
            <img className='image9' src={image9} alt="description_3" />
            <p className='head7'>Peter Parker<br /><span className='intro6'>Artist</span></p>
          </div>
          <div>
            <img className='image9' src={image10} alt="description_3" />
            <p className='head7'>Peter Parker<br /><span className='intro6'>Artist</span></p>
          </div>
        </Slider>
        <p className='head8'>Our Team<span className='sub4'> Provides</span></p>
        <p className='head9'>Next Level<span className='sub4'> Services</span></p>
        <p className='intro7'>4le Studios provides end-to-end services for clients wishing to employ game development businesses skilled in Unity3D, Unreal, PlayCanvas, blockchain, game design, VR, NFT, metaverse, and more.<br/> <Link to="/services" className='Glink2'>Our Services</Link> </p>
        <div className='join'>
        <img className='image11' src={image11} />
        <img className='image11' src={image11} />
        <img className='image11' src={image11} />
        <p className='head9'>Join Us</p>
        <p className='intro7'> Still haven&apos;t found your dream job? Join Team 4le Studios and become the next member of an ever-growing family!<br/> <Link to="/pages/careers" className='Glink2'>Explore Jobs</Link> </p>
        </div>
      </div>
      <div className='footer'>
        <div>
          <h4 className='head4'>4le Studios</h4>
          <p className='intro3'> 4le Studios is a premier gaming studio creating innovative and engaging games for players of all ages. Offering a wide variety of gaming experiences. </p>
          <div className='socials'>
            <a href='#' className='icon2'><FaFacebook /></a>
            <a href='#' className='icon2'><FaInstagram /></a>
            <a href='#' className='icon2'><FaTwitter /></a>
            <a href='#' className='icon2'><FaLinkedin /></a>
          </div>
          <img className='image12' src={image12} />
        </div>
          <h4 className='head4'>Let&apos;s Get Started</h4>









      </div>
    </div>
  );
}

export default Home;