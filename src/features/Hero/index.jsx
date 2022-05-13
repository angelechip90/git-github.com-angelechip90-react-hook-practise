import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Hero from './components/Hero';

HeroFeature.propTypes = {
};

function HeroFeature(props) {
    const [count, setCount] = useState(0);


    //useMemo => dùng cho giá trị và trả về giá trị cũ(mảng, ...) khi re-render
    //const data = useMemo(() => [{}, {}, {}], []);

    //usecallback => dùng cho function và trả về hàm cũ khi re-render
    const handleHeroClick = useCallback(() => { }, []);

    //useRef: cách giữ giá trị trước đó của 1 state
    //áp dụng: ví dụ cái vị trí bản đồ, search vị trí 1 xong search vị trí 2
    const [countnum, setCountnum] = useState(0);
    const prevCount = useRef(countnum);

    useEffect(() => {
        prevCount.current = countnum;
    }, [countnum]);

    const handleIncreaseClick = () => {
        setCountnum(x => x + 1);
    }

    //hạn chế dùng 2 ông này, chỉ dùng khi thấy project chạy khá nặng và cần tối ưu

    return (
        <div>
            <h2>Hero test useMomo và useCallback</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <Hero name="Supermen" onClick={handleHeroClick} />

            <p>Previous: {prevCount.current}</p>
            <p>Current: {countnum}</p>
            <button onClick={handleIncreaseClick}>Tăng lên</button>
        </div>
    );
}

export default HeroFeature;