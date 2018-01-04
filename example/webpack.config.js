const path = require('path');

module.exports = {
    entry: './src/entrypoint.js',
    output: {
        filename: 'entrypoint.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-env',
                            'babel-preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.html\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                        loader: '../src/stateless-jsx-loader'
                    }
            }
        ]
    }
};