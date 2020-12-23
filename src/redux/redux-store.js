import { applyMiddleware, combineReducers, createStore } from "redux";
import messagerReducer from './messager-reducer';
import profileReducer from './profile-reducer';
import findFriendReducer from './findFriend-reduser';
import authReduser from './auth-reduser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagerPage: messagerReducer,
    FindFriendPage: findFriendReducer,
    Auth: authReduser,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

window.store = store