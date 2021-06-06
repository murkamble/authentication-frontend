import { authConstants } from "../constants"
import axios from "../helpers/axios"

export const login = (user) => {
    console.log('action - user:')
    console.log(user)
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST })
        try {
            const res = await axios.post(`/auth/signin`, { ...user })
            if (res.status === 200) {
                const { token, user } = res.data;
                localStorage.setItem('token', token)
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