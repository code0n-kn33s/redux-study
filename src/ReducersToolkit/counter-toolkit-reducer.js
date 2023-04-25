import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')


const counterToolkitReducer = {
    [increment]: (store) => {
        console.log('incremented')
        store.count = store.count + 1
    },
    [decrement]: (store) => {
        console.log('!incremented')
        store.count = store.count - 1 
    }
}

export default createReducer(initialState, counterToolkitReducer)