const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust this path to your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Adjust this path to your output directory
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
        ],
    },
};