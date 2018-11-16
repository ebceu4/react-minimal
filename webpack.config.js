const webpack = require('webpack')
const copy = require('copy-webpack-plugin')
const path = require('path')

module.exports = (args) => ({
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new copy([
      { from: './web', to: './', ignore: ['js/{**/*,*}'] }
    ])
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
})