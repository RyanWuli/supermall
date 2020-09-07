module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://list.mogu.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/local': {
        target: 'http://192.168.3.32:8668',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/local': ''
        }
      }
    }
  }
}