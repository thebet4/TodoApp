module.exports = function configure(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@app': './src',
            '@assets': './assets',
          },
        },
      ],
    ],

  };
};
