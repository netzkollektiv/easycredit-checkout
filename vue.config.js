const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
//    output: {
//        filename: "easycredit-checkout.js"
//    }
  },
  filenameHashing: false,
  chainWebpack:
    config => {
      config.optimization.delete('splitChunks')
    },
  devServer: {
      host: 'docker03.netzkollektiv.com',
      port: '8080'
  },
}
