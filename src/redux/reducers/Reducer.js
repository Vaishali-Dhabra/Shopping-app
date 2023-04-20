import { Add_To_Cart, Clear_Cart } from "../Constants";
    const initialState = {
        productData:[],
        counter: 0,
    };
    const cartItem = (state = initialState, action) => {
    switch (action.type) {
        case Add_To_Cart:
        const productId = state.productData.findIndex(
            (item) => item.id === action.payLoad.id
        );
        if (productId >= 0) {
            state.productData[productId].stock += 1;

            return {
            ...state,
            productData: [...state.productData],
            };
        } else {
            const NewProduct = { ...action.payLoad, stock: 1 };
            return {
            ...state,
            productData: [...state.productData, NewProduct],
            };
        }
        case Clear_Cart:
        return {
            productData: [],
        };

        default:
        return state;
    }
};
export default cartItem;