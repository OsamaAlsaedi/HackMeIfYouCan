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
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <div className="hack-me-contact-form" ref={refForm}>
          <Link to="/LoginBypass" className="hack-me-flat-button">Start Now</Link>
        </div>
      </div>
      <div className="hack-me-right-side">
        <p>
          Hello World!
        </p>
      </div>
    </div>
  );
};

export default HackMeIfYouCan;
