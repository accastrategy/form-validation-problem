import path from 'path';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import SassPlugin from 'sass-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = {
    mode: 'production',
    entry: {
        'form-validation-problem': ['./src/index.js'],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].[hash].js',
        library: 'gsGameUi',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'output'),
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        new SassPlugin({
            './resources/sass/desktop/styles.scss': 'resources/css/desktop/en.css',
        }, 'development', { sourceMap: false }),

        // new SassPlugin({
        //     './resources/sass/mobile/styles.scss': 'resources/css/mobile/en.css'
        // }, 'development', {sourceMap: false}),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false,
                    },
                  },
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                extractComments: true,
                terserOptions: {
                    compress: { drop_console: true },
                },
            })],
    },
    stats: {
        colors: true,
    },
    devtool: false,
};


export default config;
