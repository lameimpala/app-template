const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = require('config')

const devtool = process.env.NODE_ENV === 'development' ? { devtool: 'source-map' } : null

module.exports = {
    ...devtool,
    mode: process.env.NODE_ENV,
    entry: ['./src/front/index'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', 'front'),
        publicPath: config.get('contextRoot')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App Template',
            template: './src/front/index.ejs',
            favicon: './src/front/favicon.ico'
        }),
        new webpack.DefinePlugin({
            CONTEXT_ROOT: JSON.stringify(config.get('contextRoot'))
        })
    ]
}
