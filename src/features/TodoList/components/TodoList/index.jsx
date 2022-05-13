import PropTypes from 'prop-types';
import React from 'react';
import todoModule from './todo.module.scss';
import classname from 'classnames/bind';
let cx = classname.bind(todoModule);

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {
    const { todos, onTodoClick } = props;

    function handleDeleteTodoOnClick(todo) {
        if (onTodoClick)
            onTodoClick(todo);
    }

    function handleCheckTodoOnClick(todo, idx) {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    }


    return (
        <div>
            <ul className={cx('todo__list')}>
                {/* {todos.map(todo => (
                    <li key={todo.id} className={cx({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                        onClick={() => handleDeleteTodoOnClick(todo)}
                    >{todo.title}</li>
                ))} */}
                {todos.map((todo, idx) => (
                    <li key={todo.id} className={cx({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                        onClick={() => handleCheckTodoOnClick(todo, idx)}
                    >{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;