const { turn } = require("core-js/fn/array");

module.exports = {
    devServer: {
        proxy: {
            '/music': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {'^/music' : '/'}
            }
        }
    }
}