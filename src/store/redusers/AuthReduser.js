
import { SIGN_IN, SIGN_OUT, SIGN_UP, FETCH_TOKEN, SET_LOADED } from './../types'

const initialState = {
    token: null,
    status: false,
    loading: true,
    loaded: false
}

const handlers = {
    [SET_LOADED]: (state, {payload}) => ({
        ...state, 
        loaded: payload
    }),

    [FETCH_TOKEN]: (state, {payload}) => ({
        ...state, 
        token: payload.token, 
        status: payload.status, 
        loading: false,
    }),
    [SIGN_IN]: (state, {payload}) => ({
        ...state, 
        token: payload.token, 
        status: payload.status,
        loaded: false
    }),
    [SIGN_UP]: (state, {payload}) => ({
        ...state, 
        token: payload.token, 
        status: payload.status,
        loaded: false
    }),
    [SIGN_OUT]: state => ({
        ...state, 
        token: null, 
        status: false, 
        loaded: false
    }),
    DEFAULT: state => state
}


export const AuthReduser = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
