import { DefaultTheme, Theme } from '@react-navigation/native'

export const LightTheme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#eee'
	}
}

export const DarkTheme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#333'
	}
}
