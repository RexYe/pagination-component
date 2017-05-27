var path = require('path')
const fs = require('fs')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const entry = {}
fs.readdirSync(__dirname+'/src').filter(function(file) {
    return file !== '.DS_Store'
}).forEach(function(file){
    if(file.includes('index.js')) {
        entry['.'] = `./src`
    }else {
        entry[file] = `./src/${file}`
    }
})

module.exports = {
    entry,
    output: {
        path: path.resolve(__dirname, 'lib'),
        // “path”仅仅告诉Webpack结果存储在哪里，然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
        //引入的图片地址公共路径：本地环境为根目录‘/’，正式环境为cdn地址
        publicPath: '/',
        filename: '[name]/index.js',
        library: 'Component',
        libraryTarget: 'umd',
        // umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        'sass-loader',
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                {
                    loader:'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }
                ],

            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: ['url-loader']
            }
        ]
    },
    externals: {
        vue: {
            // 默认从全局变量中获得
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // '@': path.resolve(__dirname, 'src'),
        }
    },
    // devtool: process.env.NODE_ENV === 'production' ? '' : '#eval-source-map',
    plugins:[
        new ExtractTextPlugin({
            filename:  (getPath) => {
                console.log(getPath('[name]/style.css'))
                return getPath('[name]/style.css')
            },
            allChunks: true
        }),
        new CleanWebpackPlugin(['lib'], {
            "root": __dirname,
            verbose: true,
            dry: false
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        
    ]
}
