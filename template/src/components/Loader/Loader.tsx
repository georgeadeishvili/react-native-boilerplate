import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default class Loader extends PureComponent {
	state = {
		loaderIsActive: false,
		source: require('./loader.json')
	}

	start = () => {
		this.setState({ loaderIsActive: true })
	}

	stop = () => {
		this.setState({ loaderIsActive: false })
	}

	render() {
		return this.state.loaderIsActive ? (
			<View style={styles.absolute}>
				<LottieView source={this.state.source} autoPlay />
			</View>
		) : null
	}
}

const styles = StyleSheet.create({
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000033'
	}
})
