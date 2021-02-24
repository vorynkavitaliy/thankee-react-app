import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native'
import Logo from './components/Logo'
import Form from './components/Form'
import TEXT from './../../../assets/ui/TEXT'

const Login = ( { navigation } ) => {
    const openRegistrateHandler = () => {
        navigation.navigate('Registration')
    }


    return (
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Logo/>
                    <TEXT style={styles.text}>Снова здравствуйте</TEXT>
                    <Form/>

                    <View style={styles.center}>
                        <TEXT style={styles.text}>
                            Еще не зарегистрированы на сервисе?
                        </TEXT>

                        <TouchableOpacity onPress={() => openRegistrateHandler() }>
                            <TEXT style={styles.link}>Создать аккаунт</TEXT>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => openRegistrateHandler() }>
                            <TEXT style={styles.link}>Забыли пароль?</TEXT>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1'
    },

    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapper: {
        maxWidth: 320,
        width: '100%',
        marginHorizontal: 'auto'
    },

    text: {
        textAlign: 'center'
    },

    link: {
        color: '#1565d8',
        textDecorationLine: 'underline',
        marginTop: 8
    }
})

export default Login
