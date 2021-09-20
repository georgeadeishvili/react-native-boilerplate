import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'
import { useContainer } from './container'

const Home = () => {
	const { loader } = useContainer()
	return (
		<>
			<SafeAreaView />
			<View style={styles.container}>
				<View style={styles.row}>
					<Text>Hello</Text>
					<Icon name={'star'} size={16} color='#fff' />
				</View>
				<Pressable onPress={loader}>
					<Text>Start Loader</Text>
				</Pressable>
			</View>
		</>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'
	}
})
