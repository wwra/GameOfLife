var path    = require('path');
var webpack = require('webpack');

const root = path.resolve(__dirname, '../');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry  : [
        './src/index'
    ],
    output : {
        path      : path.join(root, 'dist'),
        filename  : 'bundle.js',
        publicPath: '/static/'
    },
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};