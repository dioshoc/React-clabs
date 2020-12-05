import messagerReducer from './messager-reducer'
import profileReducer from './profile-reducer'

let store = {
    _state: {
        ProfilePage: {
            PostData: [
                { id: 1, message: "Joy?" },
                { id: 2, message: "Tes?" },
                { id: 3, message: "Hey, why nobody love me?" }
            ],
            newPostText: ''
        },

        MessagerPage: {
            UserData: [
                { id: 1, name: "Oleg" },
                { id: 2, name: "Julia" },
                { id: 3, name: "Kate" },
                { id: 4, name: "Nick" },
                { id: 5, name: "Alex" },
                { id: 6, name: "Dan" }
            ],

            MessageData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How, are you?" },
                { id: 1, message: "Hi" },
                { id: 4, message: "I am ok, how are you?" },
                { id: 5, message: "I'am fun!" },
                { id: 6, message: "Good" }
            ],
            newMessageText: ''
        },
    },
    _callSubscriber() {
        console.log("State changet")
    },

    getState() {
        return this._state;
    },
    subscraibe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.MessaagerPage = messagerReducer(this._state.MessagerPage, action)
        
        this._callSubscriber(this._state);
    },
}




export default store