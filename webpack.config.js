const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        watchContentBase: true,
        liveReload: true,
        // noInfo: true
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx'] // leaves off the extension when importing
    },
    plugins: [
        new HtmlWebpackPlugin({ inject: true, template: './src/index.html' })
    ]
}
