import {applyMiddleware, createStore} from "redux";
import {Reducers} from './CombainReducers';

export const store = createStore(Reducers);