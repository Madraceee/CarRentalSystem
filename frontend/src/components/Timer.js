import React, { useState, useEffect } from 'react';

function Timer({ initialTime=60, onTimeUp }) {
    
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (time > 0) {
            const timerId = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            onTimeUp();
        }
    }, [time, onTimeUp]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
    <div>
        <span><i>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</i></span>
    </div>
    );
}

export default Timer;
