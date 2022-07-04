import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_COUNT } from "../constans/cart"

export const addToCart = (id, name, count) => ({
    type: ADD_TO_CART,
    id,
    name,
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
