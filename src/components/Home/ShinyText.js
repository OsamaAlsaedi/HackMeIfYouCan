import React from 'react';
import './shinytext.scss';

const ShinyText = ({ text, disabled, speed, className, onClick }) => {
  // Only apply the animation speed if not disabled
  const animationStyle = disabled ? {} : { animationDuration: `${speed}s` };

  return (
    <button
      className={`shiny-text-button ${className || ''}`}
      style={animationStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ShinyText;
