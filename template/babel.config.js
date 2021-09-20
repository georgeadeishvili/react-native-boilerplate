module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    [
      '@babel/preset-env',
      {
        targets: {node: 'current'},
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
        ],
      },
    ],
    ['@babel/plugin-proposal-class-properties', {loose: false}],
    'react-native-reanimated/plugin',
  ],
};
