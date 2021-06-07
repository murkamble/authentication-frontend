import { authConstants } from "../constants"

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
    },
    authenticate: false,
    authenticating: false,
    message: '',
    loading: false,
    error: null,
}

export default (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                error: null,
                authenticating: true,
            }
            break
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
                error: null,
            }
            break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                authenticate: false,
                authenticating: true,
            }
            break;
        case authConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                error: null,
                authenticating: true,
            }
            break;
        case authConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
                error: null,
            }
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                authenticate: false,
            }
            break;
        case authConstants.SEND_EMAIL_REQUEST:
            state = {
                ...state,
                error: null,
                authenticating: true,
            }
            break;
        case authConstants.SEND_EMAIL_SUCCESS:
            state = {
                ...state,
                message: action.payload.message,
                error: null,
            }
            break;
        case authConstants.SEND_EMAIL_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                message: '',
                authenticate: false,
            }
            break;
        case authConstants.RESET_PASSWORD_REQUEST:
            state = {
                ...state,
                error: null,
                authenticating: true,
            }
            break;
        case authConstants.RESET_PASSWORD_SUCCESS:
            state = {
                ...state,
                message: action.payload.message,
                error: null,
            }
            break;
        case authConstants.RESET_PASSWORD_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                message: '',
                authenticate: false,
            }
            break;
    }
    return state
}