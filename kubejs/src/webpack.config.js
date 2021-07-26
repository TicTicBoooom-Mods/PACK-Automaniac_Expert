const path = require('path');

module.exports = {
    entry: {
        server_scripts: './server/index.js',
        startup_scripts: './startup/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../'),
        filename: '[name]/script.js',
        iife: true
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
}
