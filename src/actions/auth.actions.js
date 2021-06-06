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
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { token, user }
            })
        }
    }
}