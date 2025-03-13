import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const LoginBypass = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="login-bypass-container">
            <div className="login-bypass-text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']}
                        idx={15}
                    />
                </h1>
            </div>
        </div>
    );
};

export default LoginBypass;