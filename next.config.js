module.exports = {
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/work': { page: '/work' },
            '/contact': { page: '/contact' },
        }
    },
    assetPrefix: './'
}