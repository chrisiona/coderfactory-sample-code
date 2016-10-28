// Self Executing Function
(function(){
  
  // Check if "self" exists (Browser) otherwise look for "global" (NodeJS)
  var root = (typeof self === 'object') ? self : global;

  // Attach a ShoppingCart Module to the root object
  root.ShoppingCart = function ShoppingCart(){
    
    // The Cart
    var cart = [];

    // The Cost
    var cost = 0;

    // Define Product Methods
    var product = {
      addItem: function(item){
        console.log("\nproduct.addItem(", item, ")");

        // Check to see that we received the required Object Properties
        if( !item.hasOwnProperty('name') || !item.hasOwnProperty('price') || !item.hasOwnProperty('brand') ) {
          console.error( "Error:" )
          console.error( "  > Expected: { brand: <string>, name: <string>, price: <number> }" );
          console.error( "  > Received: ", item );
        }
        else {
          // Never trust user input :)
          cart.push({
            id: cart.length, 
            brand: item.brand, 
            name: item.name,
            price: item.price
          });
          // Add this item to the cost
          cost += item.price;
        }
        return cart;
      },
      removeItem: function(id){
        // If the ID exists, remove it
        if( cart[id] ){
          console.log("\nproduct.removeItem(" + id + ")", "\n", cart[id]);
          // Reduce the cost by this item
          cost -= cart[id].price;
          // Remove the item by id
          cart.splice(id, 1);
          // Reset all the "id" properties in the cart, now that we removed one  
          for(var item in cart) {
            cart[item].id = item;
          }
        } 
        else {
          console.log( "\nproduct.removeItem() could not find item #" + id );
        }
        return cart;
      },
      getItems: function(){
        console.log("\nproduct.getItems()", "\n", cart);
        return cart;
      },
      getItemCount: function(){
        console.log("\nproduct.getItemCount()", "\n", cart.length);
        return cart.length;
      },
    };

    // Return Public Methods
    return {
      // Make product functions available
      product: product,

      // Make total cost available
      totalCost: function(){ 
        console.log("\ntotalCost()", "\n", "$" + cost);
        return cost;
      }
    }

  };

})();

// Create a new Shopping Cart
var cart = new ShoppingCart();

// Define the products to add to the cart
cart.product.addItem({ name: "Jaffas", brand: "Allens", price: 5.50 });
cart.product.addItem({ name: "Kit Kat", brand: "Nestle", price: 8.50 });
cart.product.addItem({ name: "Milkybar", brand: "Nestle", price: 4.00 });
cart.product.addItem({ name: "Smarties", brand: "Nestle", price: 3.50 });

// This one will error as there's no Brand property
cart.product.addItem({ name: "Banana", price: 5.50 });  

// Get Cart Contents
cart.product.getItems();

// Remove Item #2 (Milkybar)
cart.product.removeItem(2);

// Get Cart Contents
cart.product.getItems();

// Get the Total number of items in the Cart
cart.product.getItemCount();

// Get the Cart Cost
cart.totalCost();
