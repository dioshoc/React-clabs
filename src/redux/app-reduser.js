import { authMe } from "./auth-reduser";

const SET_INITIALIZING_SUCCSESS = 'SET_INITIALIZING_SUCCSESS'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZING_SUCCSESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const setInitializingSuccsess = () => ({ type: SET_INITIALIZING_SUCCSESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializingSuccsess());
        })
}

export default appReducer