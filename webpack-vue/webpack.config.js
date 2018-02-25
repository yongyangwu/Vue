const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports ={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//首先清除上一次的dist文件夹以及下面的所有文件
        new HtmlWebpackPlugin({
            title: 'webpack vue',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
            // '@': resolve('src'),
        }
    },
    devServer:{
        proxy: {
            "/getnewslist": "http://127.0.0.1:8388"
        }
    }
};
