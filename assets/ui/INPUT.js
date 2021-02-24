import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import TEXT from './TEXT'

const INPUT = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <TEXT style={styles.text}>{props.children}</TEXT>
            <TextInput 
                style={styles.input} 
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={ text => props.onInput(props.name, text) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },

    text: {
        marginBottom: 6
    },

    input: {
        borderRadius: 6,
        borderColor: '#919699',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        height: 48,
        fontSize: 14,
        paddingVertical: 9,
        paddingHorizontal: 16
    }
})

export default INPUT
