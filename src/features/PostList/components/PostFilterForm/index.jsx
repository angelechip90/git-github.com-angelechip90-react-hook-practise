import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');

    //useRef giúp giữ giá trị của object không thay đổi giữa những lần render
    const typingTimeoutRef = useRef(null);


    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);


        if (!onSubmit) return;

        //Kỹ thuật debounce
        //mỗi lần gõ là chờ 300ms
        //kiểm tra xem có đang chờ 300ms không, nếu có thì cleartimeout đi rồi reset lại thành 300 cho lần gõ gần nhất
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value,
            }
            onSubmit(formValue);
        }, 300)


    }



    return (
        <div>
            <form>
                <input type='text' value={searchTerm} onChange={handleSearchTermChange} placeholder='Search Text'></input>
            </form>
        </div>
    );
}

export default PostFilterForm;