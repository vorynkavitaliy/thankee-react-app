import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { textStyle } from './../../../../assets/styles/text'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 320,
        width: '100%',
        margin: 'auto'
    },

    image: {
        width: '100%',
        marginBottom: 40
    },

    text: {
        ...textStyle.semibold,
        fontSize: 15,
        textAlign: 'center' 
    }
})

export default Logo
