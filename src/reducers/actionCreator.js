import * as actionTypes from './actionType';


export const removeItem = (id) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload: id
    }
}

export const addItem = (id) => {
    return {
        type:actionTypes.ADD_ITEM,
        payload: id
    }
}