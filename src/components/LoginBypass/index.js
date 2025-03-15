import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import DecryptedText from './DecryptedText';
import './index.scss';

const LoginBypass = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const hackArray = ['H', 'a', 'c', 'k'];
    const meArray = ['M', 'e'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="login-bypass-container">
            <div className="login-bypass-left-side">
                <div className="website-boxes-container top-boxes">
                    <div className="website-box website-box-1">
                        <Link to="/sample-financial" className="image-container">
                            <div className="placeholder-image"></div>
                        </Link>
                        <div className="button-group">
                            <Link to="/sample-financial" className="login-bypass-button">Website 1</Link>
                            <a href={`${process.env.PUBLIC_URL}/resume/AnswerKey.pdf`} className="answer-key-button" target="_blank" rel="noopener noreferrer">
                                <span>?</span>
                            </a>
                        </div>
                    </div>
                    <div className="website-box website-box-2">
                        <Link to="/sample-website" className="image-container">
                            <div className="placeholder-image"></div>
                        </Link>
                        <Link to="/sample-website" className="login-bypass-button">Website 2</Link>
                    </div>
                    <div className="website-box website-box-3">
                        <Link to="/sample-website" className="image-container">
                            <div className="placeholder-image"></div>
                        </Link>
                        <Link to="/sample-website" className="login-bypass-button">Website 3</Link>
                    </div>
                </div>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={hackArray} 
                        idx={1} 
                    />
                    <span style={{ marginLeft: '20px' }}>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={meArray} 
                            idx={hackArray.length + 1} 
                        />
                    </span>
                </h1>
                <div className="website-boxes-container bottom-boxes">
                    <div className="website-box website-box-4">
                        <Link to="/sample-website" className="image-container">
                            <div className="placeholder-image"></div>
                        </Link>
                        <Link to="/sample-website" className="login-bypass-button">Website 4</Link>
                    </div>
                    <div className="website-box website-box-5">
                        <Link to="/sample-website" className="image-container">
                            <div className="placeholder-image"></div>
                        </Link>
                        <Link to="/sample-website" className="login-bypass-button">Website 5</Link>
                    </div>
                    <div className="website-box website-box-6">
                        <Link to="/sample-website" className="image-container">
                            <div className="placeholder-image"></div>
                        </Link>
                        <Link to="/sample-website" className="login-bypass-button">Website 6</Link>
                    </div>
                </div>
            </div>
            <div className="login-bypass-right-side">
                <DecryptedText
                    text="Can you find the vulnerability?"
                    speed={50}
                    maxIterations={30}
                    characters="!@#$%^&*()_+1234567890"
                    className="login-bypass-subtitle"
                    encryptedClassName="login-bypass-subtitle encrypted"
                    animateOn="view"
                    revealDirection="center"
                    sequential={true}
                    useOriginalCharsOnly={false}
                />
            </div>
        </div>
    );
};

export default LoginBypass;