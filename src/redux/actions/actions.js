import { addQuantity, decrease, decrease2, increase, increase2, subtractQuantity } from './actionTypes';

export function increaseF() {
    return {
        type: increase
    }
}

export function decreaseF() {
    return {
        type: decrease
    }
}

export function addQuantityF(num) {
    return {
        type: addQuantity,
        payload: num
    }
}

export function subtractQantityF(num) {
    return {
        type: subtractQuantity,
        payload: num
    }
}

export function increase2F() {
    return {
        type: increase2
    }
}

export function decrease2F() {
    return {
        type: decrease2
    }
}

export function asyncIncreaseF(num) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addQuantityF(num))
        }, 2000)
    }
}