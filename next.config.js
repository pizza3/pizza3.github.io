module.exports = {
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/work': { page: '/work' },
            '/contact': { page: '/contact' },
        }
    },
    assetPrefix: 'https://raw.githubusercontent.com/pizza3/pizza3.github.io/master/'
}