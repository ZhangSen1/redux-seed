/*
 * @Author: zhangsen
 * @Date:   2016-07-29 11:16:58
 * @Last Modified by:   zhangsen
 * @Last Modified time: 2016-08-04 15:08:23
 */

'use strict';

var webpack = require( 'webpack' );

/*
* production or dev
* */
var isProduction = false


var buildPathName = 'dist';

var webpackOption = {
    entry: {
        vendor: [ 'react', 'react-dom', 'redux', 'react-redux', 'redux-thunk' ],
        bundle: './src/main.js'
    },
    output: {
        path: buildPathName,
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    module: {
        loaders: [

            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015', 'react', 'stage-2' ], //'stage-3',
                    cacheDirectory: true
                }
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [ 'style', 'css' ]
            } ]
    }
};

//=============================================== Production ====================================================//

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin( {
    name: "vendor",
    filename: "vendor.js",
    minChunks: Infinity
} );

var plugins = [ commonsPlugin ];

if ( isProduction ) {
    webpackOption.devtool = 'source-map';

    var uglifyPlugin = new webpack.optimize.UglifyJsPlugin( {
        compress: {
            warnings: false
        },
        mangle:false,
        sourceMap: true
    } );

    plugins.push( uglifyPlugin );
}

webpackOption.plugins = plugins;


module.exports = webpackOption;
