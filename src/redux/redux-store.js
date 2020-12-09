import { combineReducers, createStore } from "redux";
import messagerReducer from './messager-reducer';
import profileReducer from './profile-reducer';
import findFriendReducer from './findFriend-reduser';

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagerPage: messagerReducer,
    FindFriendPage: findFriendReducer,
})

let store = createStore(reducers)

export default store

window.store = store