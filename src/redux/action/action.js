export const AddToCart = (item) => {
    return {
        type: 'AddToCart',
        payload: item
    }
}
export const RemoveToCart = (id) => {
    return {
        type: 'RemoveToCart',
        payload: id
    }
}

export const DecreaseQuantity = (item) => {
    return {
        type: 'DecreaseQuantity',
        payload: item
    }
}

export const EmptyCart = () => {
    return {
        type: 'EmptyCart',
    }
}

export default AddToCart;