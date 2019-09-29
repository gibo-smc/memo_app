const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist/js')
  },
  plugins: [
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin(
      {
        vue: true,
        tslint: true,
        formatter: 'codeframe',
        checkSyntacticErrors: false
      }
    )
  ],
  module: {
    rules:[
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // コンパイルエラーはForkTsCheckerWebpackPluginでチェック
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    modules: ['node_modules'],
    alias: {
      // vue.js のビルドを指定する
      vue: 'vue/dist/vue.common.js',
      '@': path.resolve(__dirname, 'src/')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/js/',
    open: false,
    watchContentBase: true,
    port: '3000'
  }
}