import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders'; // Optional, if you want to include the loader
import AnimatedLetters from '../AnimatedLetters';

import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const hiArray = ['H', 'i', ','];
  const imArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e'];
  const space = [' ']; // Add a single space character here
  const toArray = ['T', 'o'];
  const title = ['H', 'a', 'c', 'k', 'M', 'e', ' ', 'I', 'f', ' ', 'Y', 'o', 'u', ' ', 'C', 'a', 'n'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* Animate "Hi," */}
            <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={1} />
            <br />
            {/* Animate "I'm" */}
            <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={hiArray.length + 1} />
            {/* Animate space */}
            <AnimatedLetters letterClass={letterClass} strArray={space} idx={hiArray.length + imArray.length + 1} />
            {/* Animate "To" */}
            <AnimatedLetters letterClass={letterClass} strArray={toArray} idx={hiArray.length + imArray.length + space.length + 1} />
            <br />
            {/* Animate title */}
            <AnimatedLetters letterClass={letterClass} strArray={title} idx={hiArray.length + imArray.length + space.length + toArray.length + 1} />
          </h1>
          <h2>The website where you learn how to hack!</h2>
          <Link to="/contact" className="flat-button">Start Now</Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" /> {/* Optional Loader */}
    </>
  );
};

export default Home;
