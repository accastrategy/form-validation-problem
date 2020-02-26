import path from 'path';
import SassPlugin from 'sass-webpack-plugin';

const config = {
    mode: 'development',
    entry: {
        'form-validation-problem': ['./src/index.js'],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        library: 'gsGameUi',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/static-assets/form-validation-problem/',
    },
    plugins: [
        new SassPlugin({
            './resources/sass/desktop/styles.scss': 'resources/css/desktop/en.css',
        }, 'development', { sourceMap: true }),

        // new SassPlugin({
        //     './resources/sass/mobile/styles.scss': 'resources/css/mobile/en.css'
        // }, 'development', {sourceMap: true}),
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
    stats: {
        colors: true,
    },
    devtool: 'source-map',
};

export default config;
