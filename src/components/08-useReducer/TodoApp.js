import React, {useEffect, useReducer} from 'react'
import {todoReducer} from "./todoReducer";

import {ToDoList} from "./ToDoList";
import {TodoAdd} from "./TodoAdd";
import './styles.css'

const init = () => {
    return JSON.parse(localStorage.getItem('ToDos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('ToDos', JSON.stringify(todos))
    }, [todos]);

    const handleToggle = (toDoId) => {
        dispatch({
            type: 'toggle',
            payload: toDoId
        })
    }
    const handleAddToDo = (newToDo) => {
        dispatch({
            type: 'add',
            payload: newToDo
        })
    }
    const handleDeleteToDo = (toDoId) => {
        const action = {
            type: 'delete',
            payload: toDoId
        }
        dispatch(action);
    }


    return <>
        <h1>TodoApp ({todos.length})</h1>
        <hr/>
        <div className="row">

            <div className="col-7">
                <ToDoList
                    todos={todos}
                    handleToggle={handleToggle}
                    handleDelete={handleDeleteToDo}
                />
            </div>

            <div className="col-5">
                < TodoAdd
                    handleAddToDo={handleAddToDo}
                />

            </div>
        </div>
    </>;
}
