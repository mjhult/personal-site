import React, { useEffect, useState } from "react";
import '../../styles/components/demos/React.scss';

const ReactDemo = () => {
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        setCounter(counter < 0 ? 0 : counter);
    });

    return (
        <div className="ReactDemo">
            <p>
                Counter: { counter }
            </p>
            <div className="ReactDemo-buttons">
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
            </div>
        </div>
    );
}

export default ReactDemo;