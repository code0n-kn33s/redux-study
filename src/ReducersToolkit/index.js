import { combineReducers } from 'redux';

import counterToolkitReducer from './counter-toolkit-reducer';
// import todoToolkitReducer from './todo-toolkit-reducer';

import counterToolkitSlice from './counter-toolkit-slice';

const rootStore = combineReducers({
    // toolkit reducer
    // toolkit: counterToolkitReducer,
    // todo: todoToolkitReducer

    // toolkit slice
    toolkit: counterToolkitSlice
})

export default rootStore;