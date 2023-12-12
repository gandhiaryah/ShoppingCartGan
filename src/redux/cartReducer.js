const initialState = {
    noOfItemInCart: 0,
    cart: [],
    isLoggedIn: false
}

export const getTotal = (cart) => {
    return (
        cart.reduce((amount, item) => item.productPrice * item.quantity + amount, 0)
    )

}

export const getTotalQuantities = (cart) => {
    return (
        cart.reduce((totalQuantities, item) => item.quantity + totalQuantities, 0)
    )
}
export default function cartReducer(state = initialState, action) {

    switch (action.type) {
        case "Add_Item_To_Cart":
            let cartIndex = state.cart.findIndex((cartItem) => cartItem.id === action.item.id)
            if (cartIndex !== -1) {
                let newCart = [...state.cart]
                const newItem = { ...newCart[cartIndex] }
                newItem.quantity += 1;
                newCart[cartIndex] = newItem;

                return {
                    ...state,
                    cart: newCart
                }
            }
            else {
                return { ...state, cart: [...state.cart, action.item] }
            }
        case "Decrease_Quantity":
            const exitingItem = state.cart.find((cartItem) => cartItem.id === action.id)

            let newCart = [...state.cart]

            if (exitingItem.quantity === 1)
            {
                let updatedCart = newCart.filter(item => item.id !== action.id)
                return {
                    ...state, cart: updatedCart
                }
            }
            else
            {
                let updatedCart = newCart.map(item => item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item)
                return {
                    ...state, cart: updatedCart
                }
            }
        case "Remove_Item_From_Cart":
            let cartData = [...state.cart]            
            let updatedCart = cartData.filter(item => item.id !== action.id)
            return {
                ...state, cart: updatedCart
            }                        
        default:
            return state
    }

}
