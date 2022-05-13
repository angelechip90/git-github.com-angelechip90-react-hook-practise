import React, { useEffect, useRef, useState } from 'react';

function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'yellow', 'green', 'black'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random(COLOR_LIST) * 4);
    }

    //const randomIndex = Math.trunc(Math.random(COLOR_LIST) * 4);
    return COLOR_LIST[newIndex];
}

function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    //Change color each seconds
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;