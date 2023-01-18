//const product = 'Socks'
const app = Vue.createApp ( {
    data() {
        return {
            product: 'Socks',
            description: 'useful for keeping your feet warm',
            image: '/assets/images/socks_green.jpg',
            url: '/assets/images/socks_blue.jpg',
            inStock: true,
            inventory: 100,
            onSale: true
        }
    }
})