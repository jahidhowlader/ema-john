const getShoppingList = () => {
    let shoppingCart = {};

    const findShoppingCart = localStorage.getItem('shopping-cart')
    if (findShoppingCart) {
        shoppingCart = JSON.parse(findShoppingCart)
    }
    return shoppingCart
}

const setLocalStorage = (id) => {
    let shoppingCart = getShoppingList()

    const quantity = shoppingCart[id]
    if (!quantity) {
        shoppingCart[id] = 1
    } else {
        shoppingCart[id] = quantity + 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const clearCart = _ => {
    localStorage.removeItem('shopping-cart')
}

export {
    getShoppingList,
    setLocalStorage,
    clearCart
}