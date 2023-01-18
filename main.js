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
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes: ['Small','Medium','Large']
            
        }
    }
})