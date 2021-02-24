import React from 'react'
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import TEXT from './TEXT'
import THEME from './../styles/theme'

const BUTTON = props => {
    const content = props.disable 
        ? <ActivityIndicator size='small' color="#000"/>
        : <TEXT style={{color: '#fff'}}>{props.children}</TEXT>

    return (
        <TouchableOpacity 
            disabled={props.disable}
            style={{...styles.default, ...THEME.black, ...props.style}} 
            onPress={() => props.onPress()}
        >
            { content }
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    default: {
        height: 48,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        borderRadius: 6
    }
})

export default BUTTON
