import React from 'react';
import './App.css';

const AlertButton = ({ message, children }) => {
  const handleClick = () => {
    alert(message);
  };
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export default AlertButton;