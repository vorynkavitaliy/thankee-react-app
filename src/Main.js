import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AuthNavigation from './navigation/AuthNavigation'
import { AppNavigation } from './navigation/AppNavigation'
import { fetchToken } from './store/actions/AuthAction'


const Main = () => {
	const dispatch = useDispatch()

	useEffect( () => {
		dispatch(fetchToken())
	}, [dispatch])

	const status = useSelector( state => state.auth.status )
	const loading = useSelector( state => state.auth.loading )
	const content = status === 401 || !status ? <AuthNavigation/> : <AppNavigation/>

	if (loading) {
		return (
			<View style={styles.center}>
				<ActivityIndicator size="large" color="#000"/>
			</View>
		)
	}

    return content 
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default Main
