import React, { ReactNode } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '@navigation'
import { Loader } from '@components'
import { saveLoaderRef } from '@utils/loader'

const App: () => ReactNode = () => {
	const isDarkMode = useColorScheme() === 'dark'

	const backgroundStyle = {
		backgroundColor: isDarkMode ? '#333' : '#eee'
	}

	return (
		<SafeAreaProvider style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<Navigation />
			<Loader ref={saveLoaderRef} />
		</SafeAreaProvider>
	)
}

export default App
