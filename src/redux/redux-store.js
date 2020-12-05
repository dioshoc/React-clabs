import { combineReducers, createStore } from "redux";
import messagerReducer from './messager-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagerPage: messagerReducer,
})

let store = createStore(reducers)

export default store