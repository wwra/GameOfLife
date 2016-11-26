var path    = require('path');
var webpack = require('webpack');

const root = path.resolve(__dirname, '../');

module.exports = {
    devtool: 'eval',
    entry  : [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output : {
        path      : path.join(root, 'dist'),
        filename  : 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module : {
        loaders: [{
            test   : /\.js$/,
            loaders: ['babel'],
            include: path.join(root, 'src')
        },
            {
                test   : /\.scss$/,
                loaders: ["style", "css", "sass"],
                include: path.join(root, 'src/scss')
            }
        ]
    }
};