```jsx
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


const [state, dispatch] = useReducer(reducer, 0); // reducer, initial_state


```