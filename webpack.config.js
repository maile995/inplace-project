const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
    // plugins: [
    //     new UglifyJsPlugin({
    //         exclude: [/\.min\.js$/gi] // skip pre-minified libs
    //     })
    // ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
}
