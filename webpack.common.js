const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    optimization: {
        // splitChunks: {
        //     chunks: 'all'
        // },
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        minimize: false
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    // devServer: {
    //     publicPath: "/",
    //     contentBase: "./src",
    //     hot: true
    // },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),    
            title: 'Production'
        })
    ]
};