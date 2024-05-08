import React from 'react';

const NestedButtons = () => {
  const handleOuterClick = () => {
    alert('Content followed');
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
    alert('Newsletter subscribed');
  };

  return (
    <button onClick={handleOuterClick}>
      Follow
      <button onClick={handleInnerClick}>
        + get newsletter
      </button>
    </button>
  );
};

export default NestedButtons;