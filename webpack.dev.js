const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          'style-loader', 
          'css-loader', 
          'postcss-loader'
        ]
      },
      {
        test: /\.module\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              }
            },
          },
          { loader: 'postcss-loader' }
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
});
