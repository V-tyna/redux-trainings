//import { configureStore } from '@reduxjs/toolkit';
const redux = require('redux');

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    if(action.type === 'counter/increment') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'counter/decrement') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === 'counter/addQuantity') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }

    return state;
}

const store = redux.createStore(counterReducer);

store.subscribe(() => {
    console.log('Subscribe: ', store.getState()); 
})

const increment = {
    type: 'counter/increment'
};

const decrement = {
    type: 'counter/decrement'
};

const addQuantity = (num) => {
    return {
        type: 'counter/addQuantity',
        payload: num
    }
} 

//console.log('State value before: ', store.getState());
store.dispatch(increment);
//console.log('State value after increment: ', store.getState());
store.dispatch(decrement);
//console.log('State value after decrement: ', store.getState());
store.dispatch(addQuantity(10));
//console.log('State value after addQuantity: ', store.getState());