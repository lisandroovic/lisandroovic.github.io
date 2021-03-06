const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader', // creates style nodes from JS strings
              {
                loader: 'css-loader', // translates CSS into CommonJS
                options: {
                  importLoaders: 1
                }
              },
              'postcss-loader', // post process the compiled CSS
              'sass-loader' // compiles Sass to CSS, using Node Sass by default
            ]
          }
        ]
    }
};

