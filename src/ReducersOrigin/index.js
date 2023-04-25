import { combineReducers } from 'redux';

import setCountAction from './counter_reducer';

const store = combineReducers({
    setCountAction
})

export default store;