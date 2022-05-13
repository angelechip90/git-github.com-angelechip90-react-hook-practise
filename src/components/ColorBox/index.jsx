import React, { useState } from 'react';

ColorBox.propTypes = {

};
function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'red', 'yellow', 'brown', 'black'];
    const randomInx = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomInx];
}

function ColorBox(props) {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        return initColor;
    });

    function handleBoxClick() {
        const color = getRandomColor();
        setColor(color);
        localStorage.setItem('box-color', color);
    }

    return (
        <div className='color-box'>
            <div style={{ backgroundColor: color }}
                onClick={handleBoxClick}
            >Color</div>
        </div>
    );
}

export default ColorBox;