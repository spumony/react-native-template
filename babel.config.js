module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      [
        "babel-plugin-root-import", {
          "rootPathPrefix": "~",
          "rootPathSuffix": "src"
        }
      ]
    ]
  };
};
