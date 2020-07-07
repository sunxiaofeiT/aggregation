module.exports = {
    devServer: {
        proxy: {
            '/music': {
                target: 'http://music.spf.ink/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {'^/music' : '/'}
            }
        }
    }
}