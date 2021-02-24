import React from 'react'
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import TEXT from './../../../assets/ui/TEXT'
import Logo from './components/Logo'
import FormRegistration from './components/FormRegistration';

const Registration = ( { navigation } ) => {

    const openLoginHandler = () => {
        navigation.navigate('Login')
    }

    return (
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Logo/>
                    <FormRegistration/>

                    <View style={styles.center}>
                        <TEXT style={styles.text}>
                            У вас уже есть свой аккаунт?

                            <TouchableOpacity onPress={() => openLoginHandler() }>
                                <TEXT style={styles.link}>Войти</TEXT>
                            </TouchableOpacity>
                            
                        </TEXT>
                        
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
        textDecorationLine: 'underline'
    }
})

export default Registration
