import React, { useState } from 'react'
import { View, StyleSheet, Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import INPUT from './../../../../assets/ui/INPUT'
import BUTTON from './../../../../assets/ui/BUTTON'
import { signIn } from '../../../store/actions/AuthAction'

const FormRegistration = () => {
    const dispatch = useDispatch()
    
    const initialValue = {
        name: '',
        email: '',
        phone: '',
        password: ''
    }

    const [value, setValues] = useState(initialValue)
    const loaded = useSelector( state => state.auth.loaded )

    const stateKeys = [
        {type: 'name', placholder: 'Введите имя', text: 'Имя Фамилия *'},
        {type: 'email', placholder: 'Введите email', text: 'Адрес электронной почты *'},
        {type: 'phone', placholder: '+7 (999) 999 99 99', text: 'Мобильный телефон *'},
        {type: 'password', placholder: 'Введите пароль', text: 'Придумайте пароль *'}
    ]

    const hangler = {
        onInput(type, text) {
            setValues({...value, [type]: text})
        },

        onPress() {
            for (const key in value) {
                if (value[key].trim() !== '') {
                    dispatch(signIn(value))
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

            <BUTTON disable={loaded} onPress={hangler.onPress}>Зарегестрироваться</BUTTON>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})

export default FormRegistration
