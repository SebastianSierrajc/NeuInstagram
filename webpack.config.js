const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => ({
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename:
            env.MODE === 'production' ? 'bundle.[contenthash].js' : 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[hash][ext][query]',
        clean: true,
        publicPath: '/',
    },
    mode: env.MODE,
    devtool: 'eval-cheap-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, './src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@styles': path.resolve(__dirname, 'src/assets/styles/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The ecommerce',
            filename: './index.html',
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            overlay: true,
            progress: true,
        },
        open: true,
        historyApiFallback: true,
        compress: true,
        port: 9000,
    },
})
