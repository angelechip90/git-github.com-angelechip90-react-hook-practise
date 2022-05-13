import { useEffect, useState } from 'react';


function formatDate(date) {
    if (!date) return '';

    //lấy ra giờ phút giây có 2 số
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            //HH:mm:ss
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);


        }, 1000);

        return () => {
            //clearup
            console.log('Clock cleanup');
            clearInterval(clockInterval);

        };
    }, []);

    //Trả về object để sau này có thể trả về thêm nhiều thứ nữa
    //Hoặc có thể chỉ cần trả về kiểu string thì không cần ngoặc nhọn
    return { timeString };
}

export default useClock;