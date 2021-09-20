import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from 'pages'
import { authStackScreenOptions } from './config'

const MainStackBeforeAuthNavigator = () => {
	const BeforeAuthMainStack = createNativeStackNavigator()
	return (
		<BeforeAuthMainStack.Navigator initialRouteName='Home' screenOptions={authStackScreenOptions}>
			<BeforeAuthMainStack.Screen component={Home} name='Home' />
		</BeforeAuthMainStack.Navigator>
	)
}

export default MainStackBeforeAuthNavigator
