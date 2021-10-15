import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { saveReference } from '@utils/navigation'
import BeforeAuth from './BeforeAuth'
import { LightTheme, DarkTheme } from './theme'
import { useColorScheme } from 'react-native'

export default () => {
	const isDark = useColorScheme() === 'dark'
	return (
		<NavigationContainer ref={saveReference} theme={isDark ? DarkTheme : LightTheme}>
			<BeforeAuth />
		</NavigationContainer>
	)
}
