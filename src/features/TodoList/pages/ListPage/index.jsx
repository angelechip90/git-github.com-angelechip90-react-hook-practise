import React, { useRef, useState } from 'react';
import TodoFilter from '../../components/TodoFilter';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {

};

function ListPage(props) {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Accepting The Tasks', status: 'new' },
        { id: 2, title: 'Analysing The Tasks', status: 'completed' },
        { id: 3, title: 'Coding and Finishing The Task', status: 'new' },
    ]);

    const [filterValue, setFilterValue] = useState('all');
    const listTodo = useRef(todos);

    function handleDeleteOnClick(todo) {
        const index = todos.findIndex(x => x.id === todo.id);
        if (index < 0) return;
        console.log(index);

        const newListTodo = [...todos];
        newListTodo.splice(index, 1);
        setTodos(newListTodo);
    }

    function handleChangeStatusOnClick(todo, idx) {
        const newTodoList = [...todos];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        listTodo.current = newTodoList;
        setTodos(newTodoList);
    }

    function handleTodoFormSubmit(formValues) {
        console.log('Form Submit: ', formValues);
        const newTodo = {
            id: todos.length + 5,
            ...formValues,
            status: 'new',
        }
        const newTodoList = [...todos];
        newTodoList.push(newTodo);
        listTodo.current = newTodoList;
        setTodos(newTodoList);
        console.log(newTodo);
    }

    function handleFilterClick(status) {
        const newTodos = [...listTodo.current];
        const renderedTodoList = newTodos.filter(todo => status === 'all' || status === todo.status);
        setTodos(renderedTodoList);
        setFilterValue(status);
    }


    return (
        <div>
            <h2>Todo List</h2>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            {/* <TodoList todos={todos} onTodoClick={handleDeleteOnClick} /> */}
            <TodoList todos={todos} onTodoClick={handleChangeStatusOnClick} />
            <TodoFilter onFilterClick={handleFilterClick} />

        </div>
    );
}

export default ListPage;