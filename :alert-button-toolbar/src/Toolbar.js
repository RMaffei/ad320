import React from 'react';
import AlertButton from './AlertButton';

const Toolbar = () => {
  return (
    <div>
      <AlertButton message="HELLO!">Hi</AlertButton>
      <AlertButton message="GOODBYE!">Bye</AlertButton>
    </div>
  );
};

export default Toolbar;