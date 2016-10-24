//webpack.config.js
var path = require('path');
var APP_PATH=path.resolve(__dirname,'./js');
var BUILD_PATH=path.resolve(__dirname,'./js/dist');
module.exports = {
    entry: {
        app:path.resolve(APP_PATH,'index.js')
    },
    output: {
        path: BUILD_PATH,
            filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test:  /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        }
        ]
}
}

