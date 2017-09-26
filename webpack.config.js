'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        editor: path.resolve(__dirname, 'src/editor/editor.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'node_modules/jquery/dist',
            to: 'vendors/jquery/dist'
        }, {
            from: 'node_modules/bootstrap/dist',
            to: 'vendors/bootstrap/dist'
        }, {
            from: 'node_modules/snapsvg/dist',
            to: 'vendors/snapsvg/dist'
        }]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/editor/editor.html'),
        }),
        new ExtractTextPlugin('editor.css')
    ],
    externals: {
        snapsvg: 'Snap',
        $: 'jquery'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
};