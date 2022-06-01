const initialState = {
    counter: 0
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'counter/increase':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'counter/decrease':
            return {
                ...state,
                counter: state.counter - 1
            }
            case 'counter/addQuantity':
            return {
                ...state,
                counter: state.counter + +action.payload
            }
            case 'counter/subtractQuantity':
            return {
                ...state,
                counter: state.counter - +action.payload
            }
        default: 
            return state;
    }
}
