
export function addToCart(product) {
    return {
        type: "Add_Item_To_Cart",
        item: product
    }
}

export function removeFromCart(id) {
    return {
        type: "Remove_Item_From_Cart",
        id: id
    }
}


export function decreaseQuantity(id) {
    return {
        type: "Decrease_Quantity",
        id: id
    }
}
