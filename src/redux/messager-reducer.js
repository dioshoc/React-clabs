const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

const messagerReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let NewMessage = {
                id: 7,
                message: state.newMessageText,
            }
            return {
                ...state,
                newMessageText: '',
                MessageData: [...state.MessageData, NewMessage]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default messagerReducer


