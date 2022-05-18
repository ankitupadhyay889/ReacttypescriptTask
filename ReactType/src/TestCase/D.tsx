import React, { useState } from 'react';

const D = () => {

    const [count, setcount] = useState(0)

    return (
        <div>
            <div>
                Count: <span data-testid="disk"> {count} </span>
            </div>
            <div>
                <button data-testid="button1" onClick={() => setcount(1)}>1</button>
                <button data-testid="button2" onClick={() => setcount(2)}>2</button>
                <button data-testid="button3" onClick={() => setcount(3)}>3</button>
            </div>
        </div>
    );
};

export default D;