import PropTypes from 'prop-types';
import React, { useState } from 'react';

TodoFilter.propTypes = {
    onFilterClick: PropTypes.func,
};

TodoFilter.defaultProps = {
    todos: [],
    onFilterClick: null,
}

function TodoFilter(props) {
    const { onFilterClick } = props;

    function handleFilterClick(status) {
        if (onFilterClick) {
            onFilterClick(status);
        }
    }

    return (
        <div>
            <button onClick={() => handleFilterClick('all')}>Show All</button>
            <button onClick={() => handleFilterClick('completed')}>Show Completed</button>
            <button onClick={() => handleFilterClick('new')}>Show New</button>
        </div>
    );
}

export default TodoFilter;