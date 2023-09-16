import multipleHtmlPlugins from "./src/pages/index.js"
import Entry from "./src/js/index.js"

/**
 * LINK:https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
 */
import * as path from 'path'
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const webpack =  {
  entry: {...Entry}, // Dẫn tới file index.js ta đã tạo
  output: {
    filename: '[name].[hash:20].js',
    path: __dirname + '/build'
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.scss$/i, // Sử dụng style-loader, css-loader cho file .sass | .scss
        use: ["style-loader", "css-loader","sass-loader" ],
      },
    ],
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [...multipleHtmlPlugins]
}

export default webpack
