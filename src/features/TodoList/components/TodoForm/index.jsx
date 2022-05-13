import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        //chặn reload khi enter
        e.preventDefault();
        if (!onSubmit) return;

        const formValues = {
            title: value,

        }
        onSubmit(formValues);

        //reset form
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label style={{ marginRight: '10px' }}>Input new task:</label> <input type="text" value={value} onChange={handleValueChange} placeholder='Input new task and enter'></input>
        </form>

    );
}

export default TodoForm;