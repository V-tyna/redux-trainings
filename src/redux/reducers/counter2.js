import { decrease2, increase2 } from '../actions/actionTypes';

const initialState = {
    counter2: 200
}

export default function counter2(state = initialState, action) {
    switch(action.type) {
        case increase2:
            return {
                ...state,
                counter2: state.counter2 + 1
            }
        case decrease2:
            return {
                ...state,
                counter2: state.counter2 - 1
            }
        default: 
            return state;
    }
}
