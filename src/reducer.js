const reducer = (state, action) => {

    if (action.type === 'DECREASE') {
        return { ...state, count: state.count - 1 }
    }
    if (action.type === 'CLEAR_CART') {
        return { ...state, cartItems: [] }
    }
    if (action.type === 'REMOVE') {

        return {
            ...state, cartItems: state.cartItems.filter((item) => {
                return item.id !== action.payload
            })
        }
    }
    return state
}

export default reducer