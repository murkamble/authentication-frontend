import { authConstants } from "../constants"
import axios from "../helpers/axios"

export const login = (user) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST })
        try {
            const res = await axios.post(`/auth/signin`, { ...user })
            if (res.status === 200) {
                const { token, user } = res.data;
                localStorage.setItem('authToken', token)
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: { token, user }
                })
            }
        } catch (error) {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: error.response.data.error }
            })
        }
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('authToken');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { token, user }
            })
        }
    }
}

export const isTokenValid = () => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
        dispatch({ type: authConstants.GET_TOKEN_REQUEST })
        try {
            const { data } = await axios.get('/private', config)
            dispatch({
                type: authConstants.GET_TOKEN_SUCCESS,
                payload: { message: data.data }
            })
        } catch (error) {
            dispatch({
                type: authConstants.GET_TOKEN_FAILURE,
                payload: { error: 'You are not authorized please login' }
            })
            localStorage.removeItem('authToken')
        }
    }
}

export const signup = (user) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.SIGNUP_REQUEST })
        try {
            const res = await axios.post(`/auth/signup`, { ...user })
            if (res.status === 201) {
                const { token, user } = res.data;
                localStorage.setItem('authToken', token)
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: authConstants.SIGNUP_SUCCESS,
                    payload: { token, user }
                })
            }
        } catch (error) {
            dispatch({
                type: authConstants.SIGNUP_FAILURE,
                payload: { error: error.response.data.error }
            })
        }
    }
}

export const forgotPassword = (email) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.SEND_EMAIL_REQUEST })
        try {
            const res = await axios.post('/auth/forgotpassword', { email })
            dispatch({
                type: authConstants.SEND_EMAIL_SUCCESS,
                payload: { message: res.data.data }
            })
        } catch (error) {
            dispatch({
                type: authConstants.SEND_EMAIL_FAILURE,
                payload: { error: error.response.data.error }
            })
        }
    }
}

export const resetPassword = (password, match) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.RESET_PASSWORD_REQUEST })
        try {
            const res = await axios.put(`/auth/resetpassword/${match.resetToken}`, { password })
            dispatch({
                type: authConstants.RESET_PASSWORD_SUCCESS,
                payload: { message: res.data.data }
            })
        } catch (error) {
            dispatch({
                type: authConstants.RESET_PASSWORD_FAILURE,
                payload: { error: error.response.data.error }
            })
        }
    }
}