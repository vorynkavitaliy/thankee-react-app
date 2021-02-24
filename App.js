import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter'
import Main from './src/Main'

export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold
	});

	if (!fontsLoaded) {
		return (
			<AppLoading/>
		)
	}
	return <Provider store={store}><Main/></Provider>
}

