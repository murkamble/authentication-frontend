import { authConstants } from "../constants"

const initState = {
    name: 'Mayur'
}

export default (state = initState, action) => {
    console.log('reducers - action:')
    console.log(action)
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            }
            break
    }
    return state
}