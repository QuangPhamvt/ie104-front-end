import HtmlWebpackPlugin from 'html-webpack-plugin'

const multipleHtmlPlugins = [
  new HtmlWebpackPlugin({
    template: './src/pages/index.html',
  }),
  new HtmlWebpackPlugin({
    template: './src/pages/page1.html',
    filename: 'page1.html',
    chunks: ['page1'],
  }),
]

export default multipleHtmlPlugins
