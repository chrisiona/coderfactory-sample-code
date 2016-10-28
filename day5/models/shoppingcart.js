var cart = [];

var shoppingCartModel = {
    getCart: function getCart(){
        return cart;
    },
    totalCost: function totalCost(){
        let totalCost = 0;

        for( let index in cart ) {
            totalCost += cart[index].price;
        }

        return totalCost;
    },
    addItemToCart: function addItemToCart(item){
        let product = {
            id: cart.length,
            brand: item.brand,
            name: item.name,
            price: item.price
        };
        return ( cart.length < cart.push( product ) );
    },
    removeItemFromCart: function removeItemFromCart(id) {
        let item = parseInt(id);
        if( typeof item === 'number' && !isNaN( item ) ) {
            if( cart[item] ) {
                cart.splice(item, 1);
                return true;
            }
        }
        return false;
    }
};

module.exports = shoppingCartModel;