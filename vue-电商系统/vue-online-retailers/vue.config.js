module.exports = {
    pages: {
        index: {
            // 页面入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'vue-online-retailers',
        },
      },
    devServer: {
        proxy: {
            '/api': { //这里最好有一个 /
                target: 'http://mall-pre.springboot.cn', // 后台接口域名
                ws: true, //如果要代理 websockets，配置这个参数
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // lintOnSave: false
    productionSourceMap: true,
    //删除预加载
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}