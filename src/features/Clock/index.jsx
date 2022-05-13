import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Clock from './components/Clock';
import CustomHookClock from './components/CustomHookClock';

ClockFeature.propTypes = {

};

function ClockFeature(props) {
    const [showClock, setShowClock] = useState(true);
    function changeShowlock() {
        if (showClock === true)
            setShowClock(false);
        else
            setShowClock(true);
    }
    return (
        <div>
            {/* {showClock && <Clock />} */}
            <h2>Clock</h2>
            {showClock && <CustomHookClock />}
            {/* <button disabled={showClock === false} onClick={() => setShowClock(false)}>Hide Clock</button>
            <button disabled={showClock === true} onClick={() => setShowClock(true)}>Show Clock</button> */}
            <button onClick={changeShowlock}>{showClock === true ? "Hide Clock" : "Show Clock"}</button>
        </div >
    );
}

export default ClockFeature;