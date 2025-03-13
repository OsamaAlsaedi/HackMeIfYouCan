import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import GradientText from './GradientText';
import Aurora from './Aurora';
import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const navigate = useNavigate();

  const hiArray = ['H', 'i', ','];
  const imArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e'];
  const space = [' '];
  const toArray = ['T', 'o'];
  const title = ['H', 'a', 'c', 'k', ' ', 'M', 'e', ' ', 'I', 'f', ' ', 'Y', 'o', 'u', ' ', 'C', 'a', 'n'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Aurora
        // Controls the aurora background colors: salmon pink -> light purple -> turquoise gradient
        colorStops={["#FF8080", "#CA88F7", "#29C3DB"]}
        blend={0.8}
        amplitude={1.5}
      />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={1} />
            <br />
            <span style={{ letterSpacing: '-2px' }}>
              <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={hiArray.length + 1} />
            </span>
            <AnimatedLetters letterClass={letterClass} strArray={space} idx={hiArray.length + imArray.length + 1} />
            <span style={{ letterSpacing: '-10px' }}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={toArray}
                idx={hiArray.length + imArray.length + space.length + 1}
              />
            </span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={title}
              idx={hiArray.length + imArray.length + space.length + toArray.length + 1}
            />
          </h1>
          <h2>The website where you learn how to hack!</h2>
          <Link to="/LoginBypass">
            <GradientText 
              colors={["#FF8080", "#CA88F7", "#29C3DB", "#CA88F7", "#FF8080"]}
              animationSpeed={8}
              showBorder={true}
              className="gradient-button"
            >
              Start Now
            </GradientText>
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
