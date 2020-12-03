const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

    addPost() {
        let NewPost = {
            id: 4,
            message: this._state.ProfilePage.newPostText,
        }

        this._state.ProfilePage.PostData.push(NewPost);
        this._state.ProfilePage.newPostText = ""
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let NewPost = {
                id: 4,
                message: this._state.ProfilePage.newPostText,
            }
            this._state.ProfilePage.PostData.push(NewPost);
            this._state.ProfilePage.newPostText = ""
            this._callSubscriber(this._state);


        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default store