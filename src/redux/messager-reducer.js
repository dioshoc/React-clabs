const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    UserData: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "Julia" },
        { id: 3, name: "Kate" },
        { id: 4, name: "Nick" },
        { id: 5, name: "Alex" },
    ],

    MessageData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How, are you?" },
        { id: 1, message: "Hi" },
        { id: 4, message: "I am ok, how are you?" },
        { id: 5, message: "I'am fun!" },
        { id: 6, message: "Good" }
    ],
}

const messagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let NewMessage = {
                id: 7,
                message: action.newMessageBody,
            }
            return {
                ...state,
                MessageData: [...state.MessageData, NewMessage]
            }
        default:
            return state;
    }
}

export const addMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default messagerReducer


