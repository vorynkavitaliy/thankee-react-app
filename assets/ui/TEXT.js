import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { textStyle } from './../styles/text'

const TEXT = props => {
    return (
        <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    default: {
        ...textStyle.regular,
        fontSize: 14
    }
})

export default TEXT
