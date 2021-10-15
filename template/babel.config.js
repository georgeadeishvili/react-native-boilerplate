module.exports = {
	presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./'],
				alias: {
					'@redux': './src/redux',
					'@hooks': './src/hooks',
					'@components': './src/components',
					'@navigation': './src/navigation',
					'@pages': './src/pages',
					'@utils': './src/utils',
					'@services': './src/services',
					'@interfaces': './src/interfaces',
					'@App': './src/App.tsx'
				}
			}
		],
		'react-native-reanimated/plugin'
	]
}
