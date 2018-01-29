var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:  './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new UglifyJsPlugin(),
        // new HtmlwebpackPlugin({
        //     title: 'webpack-demos',
        //     filename: "index.html"
        // }),
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:8080'
        // })
    ],
    devServer: {
        noInfo: true,
        hot: true,
        inline: true,//实时刷新
        stats:{
            colors: true
        }
  }
}
