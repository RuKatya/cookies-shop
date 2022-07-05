import {
    LOGIN_USER,
    LOGOUT_USER,
    ADD_TO_USER_CART,
    CHANGE_COUNT_ITEM,
    DELETE_ITEM,
    ADD_COUNT_TO_ITEM_EXIST,
    CLEAR_ALL_CART
} from "../constans/user";

export const loginUser = (user) => ({
    type: LOGIN_USER,
    user
})

export const addToUserCart = (userId, item) => ({
    type: ADD_TO_USER_CART,
    userId,
    item,
})

export const changeCountItem = (userId, itemId, count) => ({
    type: CHANGE_COUNT_ITEM,
    userId,
    itemId,
    count
})

export const addCountToExistItem = (userId, itemId, count) => ({
    type: ADD_COUNT_TO_ITEM_EXIST,
    userId,
    itemId,
    count
})

export const deleteFromCart = (userId, itemId) => ({
    type: DELETE_ITEM,
    userId,
    itemId
})

export const cleareAllCart = (userId) => ({
    type: CLEAR_ALL_CART,
    userId
})

export const logoutUser = {
    type: LOGOUT_USER,
}