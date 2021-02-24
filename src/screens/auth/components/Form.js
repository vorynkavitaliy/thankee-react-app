import React, { useState }  from 'react'
import { View, StyleSheet, Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import INPUT from './../../../../assets/ui/INPUT'
import BUTTON from './../../../../assets/ui/BUTTON'
import { singUp } from '../../../store/actions/AuthAction'

const Form = () => {
    const dispatch = useDispatch()

    const initialValue = {
        email: '',
        password: ''
    }

    const [value, setValues] = useState(initialValue)
    const loaded = useSelector( state => state.auth.loaded )
    
    const stateKeys = [
        {type: 'email', placholder: 'Введите email', text: 'Адрес елктронной почты'},
        {type: 'password', placholder: 'Введите пароль', text: 'Пароль'}
    ]

    const hangler = {
        onInput(type, text) {
            setValues({...value, [type]: text})
        },

        onPress() {
            for (const key in value) {
                if (value[key].trim() !== '') {
                    dispatch(singUp(value))
                }
            }
            
            Keyboard.dismiss
        }
    }

    return (
        <View style={styles.container}>
            { stateKeys.map( input => {
                return <INPUT 
                        key={input.type}
                        name={input.type}
                        style={{marginTop: 20}} 
                        placeholder={input.placholder}
                        value={value[input.type]}
                        onInput={hangler.onInput}
                    >{input.text}</INPUT>
            } ) }

            <BUTTON disable={loaded} onPress={hangler.onPress}>Войти</BUTTON>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})


export default Form
