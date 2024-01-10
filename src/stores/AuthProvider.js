
import { createStore } from 'redux';
import { isBreakOrContinueStatement } from 'typescript';

// authReducer.js
const initialState = {
    isLoggedIn: false,
    token: null,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state


    }
}

// Create actions
export function logIn(user) {
    return {
        type: 'LOG_IN',
        payload: { user },
    };
}

const store = createStore(authReducer);

export default store;


