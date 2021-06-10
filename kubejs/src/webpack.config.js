const path = require('path');

module.exports = {
    entry: {
        server_scripts: './server/server.ts',
        startup_scripts: './startup/startup.ts',
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
                test: /\.?ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
