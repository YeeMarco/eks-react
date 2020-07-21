module.exports = {
    entry: './main.js',
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'EksReact.createElement' }]]
                }
            }
        }]
    }
};