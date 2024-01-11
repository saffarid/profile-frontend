const os = require('os')
const p = require('path')

module.exports = {

    outputDir: p.resolve(__dirname, './../www'),

    pages: {
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            filename: 'index.html',
            title: 'Павлов Никита',
            // chunks: ["index", "chunk-vendors", "chunk-common", ],
        },
    },

    chainWebpack: config => {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    },

    configureWebpack: {

        plugins: [
        ],
        cache: {
            type: 'memory',
            cacheUnaffected: true,
        },
        optimization: {
            // runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        name: 'chunk-vendors',
                        priority: -10,
                        chunks: 'initial',
                        // minSize: 20000,
                        // maxSize: 40000,
                        minChunks: 1,
                        test: /[\\/]node_modules[\\/]/,
                        enforce: true,
                        // name(module) {
                        //     // получает имя, то есть node_modules/packageName/not/this/part.js
                        //     // или node_modules/packageName
                        //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                        //
                        //     // имена npm-пакетов можно, не опасаясь проблем, использовать
                        //     // в URL, но некоторые серверы не любят символы наподобие @
                        //     return `npm.${packageName.replace('@', '')}`
                    },
                    common: {
                        name: 'chunk-common',
                        priority: -20,
                        chunks: 'initial',
                        // minSize: 2000,
                        // maxSize: 4000,
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                },
            },
        },
    },

}

