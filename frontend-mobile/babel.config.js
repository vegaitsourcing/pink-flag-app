module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['./src'],
        alias: {
          '@pf/components': './src/components',
          '@pf/constants': './src/constants',
          '@pf/hooks': './src/hooks',
          '@pf/models': './src/models',
          '@pf/navigation': './src/navigation',
          '@pf/reducers': './src/reducers',
          '@pf/screens': './src/screens',
          '@pf/services': './src/services',
          '@pf/store': './src/store',
          '@pf/theme': './src/theme',
          '@pf/utils': './src/utils',
          '@pf/assets': './src/assets',
        },
      },
    ],
        //! Must be listed last.
        'react-native-reanimated/plugin',
  ],
};
