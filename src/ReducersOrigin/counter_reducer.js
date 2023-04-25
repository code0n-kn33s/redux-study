const initialState = {
    count: 0
}

function setCountReducer(state = initialState, action) {
    switch(action.type) {
        case 'increment':
            console.log('increment', state)
            return ({...state, count: state.count + 1}) 
        case 'decrement':
            console.log('decrement', state)
            return ({count: state.count - 1}) 
        default:
            return state
    }
}

export default setCountReducer;