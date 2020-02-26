import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
    entry: {
        'form-validation-problem': ['./src/index.js'],
    },
    output: {
        filename: '[name].js',
    },
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 8070,
        contentBase: path.join(__dirname, 'dist'),
        proxy: {
            '/static-assets/form-validation-problem': {
                target: 'http://localhost:8070',
                pathRewrite: { '^/static-assets/form-validation-problem': '/' },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
};
