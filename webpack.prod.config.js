var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './demo/src/main.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel?stage=0', include: path.join(__dirname, 'demo/src') },
      { test: /\.js?$/, loader: 'babel?stage=0', exclude: /node_modules/ },
      { test: /\.scss?$/, loader: 'style!css!sass', include: path.join(__dirname, 'demo/src') },

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
}
