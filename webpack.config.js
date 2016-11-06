'use strict';
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

var PATHS = {
    app: path.resolve(__dirname, 'client'),
    public: path.resolve(__dirname, 'public')
};
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var aliases = {
    'angular': require.resolve('angular'),
    'angular-ui-router': require.resolve('./node_modules/angular-ui-router/release/angular-ui-router.js'),
    'bootstrap': require.resolve('./node_modules/bootstrap/dist/js/bootstrap.js'),
};

module.exports = {
    context: PATHS.app,
    entry: {
        app: [
            'bootstrap-loader/extractStyles',
            'webpack/hot/dev-server',
            './src/core/app_bootstrap.js'
        ]
    },
    externals: {
        angular: 'angular',
        jquery: 'jQuery'
    },
    output: {
        path: PATHS.public,
        filename: 'bundle.js'
    },
    resolve: {
        alias: aliases
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css', 'sass')
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel',
            include: [
                PATHS.app,
            ],

        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /src[/\\\\]templates[/\\\\].*\.html$/,
            loader: 'ngtemplate?requireAngular!html'
        }, {
            test: aliases['angular-ui-router'],
            loader: 'imports?angular'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file?limit=30000&name=[name]-[hash].[ext]'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATHS.app + '/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};