module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _components: './src/components',
          _atoms: './src/components/Atoms',
          _molecules: './src/components/Molecules',
          _organisms: './src/components/Organisms',
          _navigator: './src/navigator',
          _screens: './src/screens',
          _data: './src/data',
          _store: './src/store',
          _utils: './src/utils',
        },
      },
    },
  },
};
