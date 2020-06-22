import { ConfigurationFactory } from 'webpack'
import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: ConfigurationFactory = () => {
  return {
    mode: 'production',
    entry: {
      index: path.join(__dirname, 'src', 'index.ts'),
      content_script: path.join(__dirname, 'src', 'content_script.ts'),
      background: path.join(__dirname, 'src', 'background.ts')
    },
    output: {
      // distディレクトリにcontent_scripts.jsを吐く
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.html$/,
          loader: "html-loader",
          exclude: "/dist/content_script.js"
        },
        {
          test: /\.css/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {url: false}
            }
          ]
        }
      ],
      },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      // publicディレクトリにあるファイルをdistディレクトリにコピーする
      new CopyPlugin({
        patterns:[
          {from: 'public', to: '.'},
        ]
      }),
      new HtmlWebpackPlugin({
        template: './src/popup.html',
        filename: './popup.html',
        chunks: [
          'index'
        ]
      })
    ]
  }
}

export default config