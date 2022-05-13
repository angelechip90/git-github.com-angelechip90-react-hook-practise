import React from 'react';
import useClock from '../../../../hooks/useClock';
import './betterclock.scss';

CustomHookClock.propTypes = {

};


function CustomHookClock(props) {
    const { timeString } = useClock();
    return (
        <div>
            <div className="better-clock">
                <p className="better-clock__time">{timeString}</p>
            </div>
        </div>
    );
}

export default CustomHookClock;