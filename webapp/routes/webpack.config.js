module.exports = {
    entry: {
        index: './src/js/index.js',
        signin: './src/js/signin.js',
        hotelPage:'./src/js/hotelPage.js'    
    },
    output: {
        filename:'[name].js',
        path:__dirname + '/dist/js'
    },
     module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    watch: true
};
