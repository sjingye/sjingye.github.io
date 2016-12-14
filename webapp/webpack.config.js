module.exports = {
    //入口文件
    entry: "./src/entry.js",
    //编译后的输出配置
    output: {
        //输出目录 E:\miaov\2016\11\2016-11-7\2\test/dist
        path: __dirname + '/dist',
        //输出文件
        filename: "bundle.js"
    },
    //第三方模块
    module: {
        //第三方加载器模块
        loaders: [
            //test是一个固定的参数：表示一个正则匹配的路径
            //如果加载的模块匹配这个正则，那么就使用后面定义的loader去处理
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};