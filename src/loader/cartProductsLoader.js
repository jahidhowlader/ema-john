import { getShoppingList } from "../../utilities/initialDB"

const cartProductsLoader = async () => {
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json()

    const savedProductStorage = getShoppingList()
    const storeCart = []
    for (const id in savedProductStorage) {
        const singleProduct = products.find(product => product.id === id)

        if (singleProduct) {
            singleProduct.quantity = savedProductStorage[id]
            storeCart.push(singleProduct)
        }
    }
    return storeCart
}

export default cartProductsLoader;