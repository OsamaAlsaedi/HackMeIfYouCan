import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const HackMeIfYouCan = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hack-me-container">
      <div className="hack-me-left-side">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['H', 'a', 'c', 'k', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <div className="website-box">
          <Link to="/sample-website" className="image-container">
            {/* Placeholder for image */}
            <div className="placeholder-image"></div>
          </Link>
          <Link to="/sample-website" className="hack-me-flat-button">Website 1</Link>
        </div>
      </div>
      <div className="hack-me-right-side">
        <p>
          Can you find the vulnerability?
        </p>
      </div>
    </div>
  );
};

export default HackMeIfYouCan;