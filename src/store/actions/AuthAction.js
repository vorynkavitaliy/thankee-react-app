const domain = `https://thankee.devsystem.space/api/`
const url = 'https://thankee.devsystem.space/api/user'
import { AsyncStorage } from 'react-native'
import { FETCH_TOKEN, SIGN_UP, SIGN_OUT, SET_LOADED, SIGN_IN } from './../types'

export const fetchToken = () => async dispatch => {
    dispatch ({
        type: FETCH_TOKEN,
        payload: {
            loading: false
        }
    })
    // try {
    //     const token = await AsyncStorage.getItem('TOKEN')
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': token
    //         },
    //     })
    //     const result = await response.json()
    //     const status = result.status
    //     console.log(result);

        // dispatch ({
        //     type: FETCH_TOKEN,
        //     payload: {
        //         token, 
        //         status,
        //         loading: false
        //     }
        // })

    // } catch (error) {
    //     console.log(error)
    // }
}

export const singUp = ({email, password}) => async dispatch => {
    dispatch({
        type: SET_LOADED,
        payload: true
    })

    try {
        const response = await fetch(`${domain}login`, {
            method: 'POST',
            body: {
                'email': email,
                'password': password
            }
        })
        const data = await response.json()
        console.log(data)
        if (data.status) {
            await AsyncStorage.setItem('TOKEN', data.token)
            const responseToken = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': data.token
                }
            })

            const result = await responseToken.json()
            const status = result.status

            dispatch({
                type: SET_LOADED,
                payload: false
            })

            dispatch ({
                type: SIGN_UP,
                payload: {token: data.token, status}
            })
        }

        dispatch({
            type: SET_LOADED,
            payload: false
        })

    } catch (error) {
        console.log(error)
    }
}

export const signIn = ({name, phone, email, password}) => async dispatch => {
    dispatch({
        type: SET_LOADED,
        payload: true
    })

    console.log(name, phone, email, password);
    const userData = {
        'name': name,
        'email': email,
        'phone' : phone,
        'password': password
    }
    try {
        const response = await fetch(`${domain}signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: 'foo=bar&lorem=ipsum'
        })

        const data = await response.json()
        console.log(data);

        // if (data.status) {
        //     await AsyncStorage.setItem('TOKEN', data.token)
        //     const responseToken = await fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Authorization': data.token
        //         }
        //     })

        //     const result = await responseToken.json()
        //     const status = result.status

        //     dispatch({
        //         type: SET_LOADED,
        //         payload: false
        //     })

        //     dispatch ({
        //         type: SIGN_IN,
        //         payload: {token: data.token, status}
        //     })

        // }

        dispatch({
            type: SET_LOADED,
            payload: false
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const signOut = () => async dispatch => {
    dispatch({
        type: SET_LOADED,
        payload: true
    })

    try {
        await AsyncStorage.removeItem('TOKEN')

        dispatch ({
            type: SIGN_OUT,
            payload: {
                token: null,
                status: 401
            }
        })
    } catch (error) {
        console.log(error)
    }
}