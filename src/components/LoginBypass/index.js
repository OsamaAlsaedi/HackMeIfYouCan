import React, { useEffect, useState } from 'react';
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