import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import messagerReducer from './messager-reducer';
import profileReducer from './profile-reducer';
import findFriendReducer from './findFriend-reduser';
import authReduser from './auth-reduser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reduser";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagerPage: messagerReducer,
    FindFriendPage: findFriendReducer,
    Auth: authReduser,
    App: appReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store