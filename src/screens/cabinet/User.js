import React from 'react'
import { useDispatch } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import TEXT from './../../../assets/ui/TEXT'
import BUTTON from './../../../assets/ui/BUTTON'
import { signOut } from './../../store/actions/AuthAction'

const User = () => {
    const dispatch = useDispatch()
    
    const out = () => dispatch(signOut())

    return (
        <View style={styles.center}>
            <BUTTON onPress={out}>Выйти</BUTTON>
            <TEXT>User screen</TEXT>
        </View>
    )
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default User
