import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

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

  return (
    <div>
      <h2 className='head2'>Building Mobile Gaming Worlds</h2>
      <h1 className='head1'>We craft games <br/> 
        <span className='fade'>{currentWord}</span>
      </h1>
      <p className='intro'> Developing games that are imaginative, fun and bringing colors to the gaming world </p>
      <Link to="/games" className='Glink'>Explore our Games</Link>
    </div>
  );
}

export default Home;