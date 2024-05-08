import React from 'react';
import AlertButton from './AlertButton'; 

const Toolbar = () => {
  const buttons = [
    { message: 'Now Downloading', children: 'Download File' },
    { message: 'Now Sharing', children: 'Share Document' },
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
};

export default Toolbar;