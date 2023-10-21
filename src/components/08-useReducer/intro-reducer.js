const initalState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

const todoReducer = (state = initalState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    return state;
}

let todo = todoReducer();

const newTodo = {
    id: 2,
    todo: 'comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todo = todoReducer(todo, agregarTodoAction);

console.log(todo);