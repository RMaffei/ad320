import React, { useState } from 'react';
import '../index.css'; // Import the stylesheet

function Button() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <button className="center" onClick={handleClick}>
            {clicked ? 'You clicked it!' : 'Click me'}
        </button>
    );
}

export {Button};