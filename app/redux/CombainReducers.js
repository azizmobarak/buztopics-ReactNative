import {combineReducers} from "redux";
import {ThemReducer} from './reducers/themsReducer';

export const Reducers = combineReducers({
    them : ThemReducer
})