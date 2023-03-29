const addToDB = (id) => {
    let shoppingCart = {}

    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)

        const quantity = shoppingCart[id]
        if (!quantity) {
            shoppingCart[id] = 1
        } else {
            shoppingCart[id] = quantity + 1
        }
    }
    else {
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const deleteCart = _ => {
    localStorage.removeItem('shopping-cart')
}


export { addToDB }


// Logic of Programming Hero

// const getShoppingCart = () => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }