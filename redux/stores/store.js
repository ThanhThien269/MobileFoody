import {createStore, combineReducers} from "redux";
import {tagReducer} from "../reducers/tagReducer";
import {rootReducer} from "../reducers"

const store=createStore(rootReducer);
export default store;