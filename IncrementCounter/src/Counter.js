import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const incrementAfterDelay = () => {
        setTimeout(() => {
            setCount((prevCount) => prevCount + 1);
        }, 3000);
    };
    
    const incrementTwice = () => {
        setCount(count + 2);
    };

    return (
        <div className="container">
            <div className="content">
                <h2>Count: {count}</h2>
                <div className="button-container">
                    <button onClick={increment}>Increment</button>
                    <button onClick={incrementAfterDelay}>Increment After Delay</button>
                    <button onClick={incrementTwice}>Increment Twice</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;