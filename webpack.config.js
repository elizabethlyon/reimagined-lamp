var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');
var isProd = process.env.NODE_ENV === 'production';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BootstrapEntryPoints = require('./webpack.bootstrap.config');

var bootstrapConfig = isProd ? BootstrapEntryPoints.prod : BootstrapEntryPoints.dev;

module.exports = {
  entry: {
    main: './src/app.js',
    vendor: ['jquery', bootstrapConfig]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
          }
        }
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      }
    ]
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist/bundle.js'),
  //   hot: true
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Skill Practice',
      template: './src/templates/base.ejs'
    }),
    new ExtractTextPlugin('styles.less'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    }),
    new webpack.ProvidePlugin(
      {
        $: 'jquery',
        JQuery: 'jQuery'
      })
    // new OpenBrowserPlugin('http://localhost:8080'),
  ]
}
