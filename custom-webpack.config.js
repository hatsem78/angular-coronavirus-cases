const webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const path = require("path");


module.exports = {
    context: __dirname,
    entry: {
      main: './src/main.ts'
    }, resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
        path: require('path').resolve('../mysite/polls_angular/static/angular-coronavirus'),
        filename: "[name]-[hash].js",
        publicPath: "http://localhost:8006/static/angular-coronavirus/"
    },
    "devServer": {
        "historyApiFallback":  true,
        "publicPath":  "http://127.0.0.1:4200/",//2,
        "headers": {
            'Access-Control-Allow-Origin':  '\\*'//3
        }
    },

    plugins: [
      new BundleTracker({filename: '../mysite/webpack-stats-coronavirus.json'}),
      new webpack.DefinePlugin({
        'STABLE_FEATURE': JSON.stringify(true),
        'EXPERIMENTAL_FEATURE': JSON.stringify(false),
      })
    ]
};


/*module.exports = {
  entry: {
    main: './src/main.ts'
  }, resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: require('path').resolve('../dist/angular-webpack-demo'),
    "filename":  "[name].bundle.js",
    "chunkFilename":  "[id].chunk.js",
    "crossOriginLoading":  false,
    "publicPath":"http://127.0.0.1:4200/"//1
  },
  "devServer": {
      "historyApiFallback":  true,
      "publicPath":  "http://127.0.0.1:4200/",//2
  },
  plugins: [
    new BundleTracker({filename: '../webpack-stats.json'}),
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false),
    })
  ]
};*/
