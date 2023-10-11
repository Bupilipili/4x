import React, { useState, useEffect } from 'react';
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
    </div>
  );
}

export default Home;