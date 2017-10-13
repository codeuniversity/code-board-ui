// cosmos.config.js
module.exports = {
    componentPaths: ['src/components'],
    containerQuerySelector: '#root',
    webpackConfigPath: 'react-scripts/config/webpack.config.dev',
    publicPath: 'public',
    // Optional: Add this when you start using proxies
    // proxiesPath: 'src/cosmos.proxies'
    globalImports: [
      './src/styles/App.css'
    ],
  };
