const os = require('os')
const p = require('path')

module.exports = {

    outputDir: p.resolve(__dirname, './../www'),

    pages: {
        index: {
            entry: './src/pages/index/main.ts',
            template: './public/index.html',
            filename: 'index.html',
            title: 'Axelrod',
            chunks: ['index', 'chunk-vendors', 'chunk-common', 'chunk-index-vendors', 'runtime~index'],
        },
        // auth: {
        //     entry: './src/pages/auth/main.ts',
        //     template: './public/index.html',
        //     filename: 'auth/index.html',
        //     title: 'Auth',
        //     chunks: ['auth', 'chunk-vendors', 'chunk-common', 'chunk-auth-vendors', 'runtime~auth'],
        // },
    },

    chainWebpack: config => {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')

        const options = module.exports
        const pages = options.pages
        const pageKeys = Object.keys(pages)

        const IS_VENDOR = /[\\/]node_modules[\\/]/

        config.optimization
          .splitChunks({
              cacheGroups: {
                  vendors: {
                      name: 'chunk-vendors',
                      priority: -10,
                      chunks: 'initial',
                      minChunks: 2,
                      test: IS_VENDOR,
                      enforce: true,
                  },
                  ...pageKeys.map(key => ({
                      name: `chunk-${key}-vendors`,
                      priority: -11,
                      chunks: chunk => chunk.name === key,
                      test: IS_VENDOR,
                      enforce: true,
                  })),
                  common: {
                      name: 'chunk-common',
                      priority: -20,
                      chunks: 'initial',
                      minChunks: 2,
                      reuseExistingChunk: true,
                      enforce: true,
                  },
              },
          })
    },

    configureWebpack: {

        plugins: [ ],

        cache: {
            type: 'memory',
            cacheUnaffected: true,
        },

        optimization: {
            runtimeChunk: true,
            minimize: true,
            minimizer: [ ],
        },
    },

}

