const debug = process.env.NODE_ENV !== 'production'
module.exports = {
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/work': { page: '/work' },
            '/contact': { page: '/contact' },
        }
    },
    assetPrefix: !debug ? '/' : './'
}