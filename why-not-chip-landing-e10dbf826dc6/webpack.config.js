const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,

  entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/index'],

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
    new webpack.EnvironmentPlugin([
      'INVESTORS_ADD_TIMEOUT',
      'INVESTORS_COUNT',
      'INVESTORS_MAX',
      'VIDEO_EMBED_URL',
      'VIDEO_THUMBNAIL_URL',
      'WEBSITE_URL',
    ]),
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    modules: [path.resolve('.'), path.resolve('./node_modules')],
    extensions: ['.mjs', '.js', '.jsx'],
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
