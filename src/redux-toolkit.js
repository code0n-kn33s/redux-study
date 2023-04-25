import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './ReducersToolkit'

export let store = configureStore({
    reducer: rootReducer
});