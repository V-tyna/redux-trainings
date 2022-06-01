const initialState = {
    counter2: 200
}

export default function counter2(state = initialState, action) {
    switch(action.type) {
        case 'counter2/increase':
            return {
                ...state,
                counter2: state.counter2 + 1
            }
        case 'counter2/decrease':
            return {
                ...state,
                counter2: state.counter2 - 1
            }
        default: 
            return state;
    }
}
