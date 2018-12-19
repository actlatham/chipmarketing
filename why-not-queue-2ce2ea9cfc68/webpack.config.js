const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,

  entry: ['babel-polyfill', 'react-hot-loader/patch', './src/index'],

  devServer: {
    hot: true,
    port: 5000,
    inline: true,
    host: '0.0.0.0',
    index: 'index.html',
    contentBase: path.resolve('./src'),
    historyApiFallback: true,
  },

  devtool: 'inline-source-map',

  output: {
    filename: 'js/app.[hash].js',
    path: path.resolve('./dist/'),
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'global.GENTLY': false,
        NODE_ENV: JSON.stringify(
          process.env.NODE_ENV === 'development' ? 'development' : 'production'
        ),
        ENVIRONMENT: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.woff2?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'videos/',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    modules: [path.resolve('.'), path.resolve('./node_modules')],
    extensions: ['.js', '.jsx'],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';
  config.plugins = [
    ...config.plugins,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ];
}

module.exports = config;
