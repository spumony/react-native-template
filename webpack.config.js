const webpack = require('webpack');
const fs = require('fs');
const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// plugins
const envPlugin = (mode = 'development') => new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(mode)
  }
});

const packageVersionPlugin = () => {
  const packageJson = fs.readFileSync('./package.json')
  const version = JSON.parse(packageJson).version || 0;

  return new webpack.DefinePlugin({
    'process.env': {
      PACKAGE_VERSION: `"${version}"`
    }
  });
}

// rules
const jsRules = {
  test: /\.js?/,
  include: path.resolve(__dirname, 'src'),
  use: [
    'babel-loader', 'eslint-loader'
  ]
};

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  return {
    ...config,
    plugins: [
      ...(config.plugins || []),

      envPlugin(config.mode),
      packageVersionPlugin()
    ],
    module: {
      ...config.module,
      rules: [
        ...(config.module.rules || []),

        jsRules
      ]
    }
  };
};