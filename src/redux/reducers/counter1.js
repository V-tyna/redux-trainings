import { addQuantity, decrease, increase, subtractQuantity } from '../actions/actionTypes';

const initialState = {
    counter: 0
}

export default function counter1(state = initialState, action) {
    switch(action.type) {
        case increase:
            return {
                ...state,
                counter: state.counter + 1
            }
        case decrease:
            return {
                ...state,
                counter: state.counter - 1
            }
            case addQuantity:
            return {
                ...state,
                counter: state.counter + +action.payload
            }
            case subtractQuantity:
            return {
                ...state,
                counter: state.counter - +action.payload
            }
        default: 
            return state;
    }
}
