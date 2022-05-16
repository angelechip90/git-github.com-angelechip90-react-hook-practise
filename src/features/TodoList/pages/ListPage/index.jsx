import React, { useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
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

    const location = useLocation();

    //dùng queryString để lấy param trên location qua location.search
    const [filterValue, setFilterValue] = useState(() => {
        const param = queryString.parse(location.search);
        return param.status || 'all';
    });

    //const listTodo = useRef(todos);

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
        //listTodo.current = newTodoList;
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
        //listTodo.current = newTodoList;
        setTodos(newTodoList);
        console.log(newTodo);
    }

    const handleShowAllClick = () => {
        setFilterValue('all');
    }
    const handleShowCompletedClick = () => {
        setFilterValue('completed');
    }
    const handleShowNewClick = () => {
        setFilterValue('new');
    }

    //const newTodos = [...listTodo.current];
    //const renderedTodoList = todos.filter(todo => filterValue === 'all' || filterValue === todo.status);

    //use memo dùng khi và chỉ khi cái todos hoặc filtervalue thay đổi thì cái list mới thay đổi, không thì lấy giá trị bình thường
    const renderedTodoList = useMemo(() => {
        return todos.filter(todo => filterValue === 'all' || filterValue === todo.status);
    }, [todos, filterValue]);

    //setTodos(renderedTodoList);

    // function handleFilterClick(status) {
    //     const newTodos = [...listTodo.current];
    //     const renderedTodoList = newTodos.filter(todo => status === 'all' || status === todo.status);
    //     setTodos(renderedTodoList);
    //     setFilterValue(status);
    // }


    return (
        <div>
            <h2>Todo List</h2>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            {/* <TodoList todos={todos} onTodoClick={handleDeleteOnClick} /> */}
            <TodoList todos={renderedTodoList} onTodoClick={handleChangeStatusOnClick} />
            {/* <TodoFilter onFilterClick={handleFilterClick} /> */}
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>

        </div>
    );
}

export default ListPage;