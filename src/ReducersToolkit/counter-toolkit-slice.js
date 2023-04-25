import { createSlice } from '@reduxjs/toolkit';

const counterToolkitSlice = createSlice({
    // name
    // initialState
    // actions || reducers

    name: 'toolkit',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (store) => {
            console.log('incremented')
            store.count = store.count + 1
        }, 
        decrement: (store) => {
            console.log('!incremented')
            store.count = store.count - 1 
        }
    }
})

export const { increment, decrement } = counterToolkitSlice.actions;
console.log('>> counterToolkitSlice', counterToolkitSlice)

export default counterToolkitSlice.reducer