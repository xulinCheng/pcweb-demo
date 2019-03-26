module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    devServer: {
        proxy: { //如需跨域请求多个域名，在此对象进行扩展即可
            '/apis': {
                // target: 'http://www.***.com/',
                target: 'http://10.100.3.99',
                ws: false, //是否使用websocket
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': ''
                }
            }
        },
        open: true, //自动启动浏览器
    },
    assetsDir: './', //test生成的文件地址
    outputDir: process.env.outputDir, //打包生成目录
    productionSourceMap: true
};