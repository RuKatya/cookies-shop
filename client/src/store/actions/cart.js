import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_COUNT, ADD_TO_CART_MORE } from "../constans/cart"

export const addToCart = (id, name, count) => ({
    type: ADD_TO_CART,
    id,
    name,
    count
})

export const addToCartMore = (id, count) => ({
    type: ADD_TO_CART_MORE,
    id,
    count
})
export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
})

export const chengeAmount = (id, count) => ({
    type: CHANGE_COUNT,
    id,
    count
})
