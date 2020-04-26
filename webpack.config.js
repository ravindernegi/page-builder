var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var hwp = require('html-webpack-plugin');

module.exports = (env, argv) => ({
    entry: {
        app: path.join(__dirname, '/src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        sourceMap: false
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false
                    }
                }
            ],
        },]
    },
    //devtool: 'source-map',
    plugins: [
        new hwp({
            template: path.join(__dirname, '/src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css"
        })
    ],
    mode: (argv.mode === 'production') ? 'production' : 'development'
});