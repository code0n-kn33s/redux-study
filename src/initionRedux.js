import { createStore } from 'redux';

function actionCreator(initionStore = { count: 0}, action) {
    switch(action.type) {
        case 'increment':
            console.log('increment', initionStore)
            return ({count: initionStore.count + 1}) 
        case 'decrement':
            console.log('decrement', initionStore)
            return ({count: initionStore.count - 1}) 
        default:
            return initionStore
        
    }
}

let store = createStore(actionCreator);

console.log('store', store);
// store.subscribe(() => console.log('subscribe'))

store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
store.dispatch({type: 'decrement'});
store.dispatch({type: 'decrement'});

export default store;