const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
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
  ],
];
