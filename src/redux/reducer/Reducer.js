const Initiate_State = {
    cart: []
}

const Reducer = (state=Initiate_State, action) => {

    switch (action.type) {

        case 'AddToCart' : 
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cart[itemIndex].stock +=1
                return {
                    ...state,
                    cart: [...state.cart]
                }
            } else {
                const temp = {...action.payload, stock: 1}
                return {
                    ...state,
                    cart: [...state.cart, temp]
                }
            }
        
        case 'RemoveToCart' :
            const data = state.cart.filter((e)=> e.id !== action.payload)
            return {
                ...state,
                cart: data
            }
        
        case 'DecreaseQuantity' :
            const itemIndex_Dec = state.cart.findIndex((item) => item.id === action.payload.id)
            if (state.cart[itemIndex_Dec].stock > 1) {
                const deleteItem = state.cart[itemIndex_Dec].stock -= 1

                return {
                    ...state,
                    cart: [...state.cart]
                }
            }break
        
        case 'EmptyCart' :
            return {
                cart: []
            }
        
        default : return state
    }

}
export default Reducer;