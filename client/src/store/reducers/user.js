import {
    LOGIN_USER,
    LOGOUT_USER,
    ADD_TO_USER_CART,
    CHANGE_COUNT_ITEM,
    DELETE_ITEM,
    ADD_COUNT_TO_ITEM_EXIST,
    CLEAR_ALL_CART
} from "../constans/user";

export const user = (state = [], action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return [...state,
            action.user
            ];
        }
        case LOGOUT_USER: {
            return [];
        }
        case ADD_TO_USER_CART: {
            return state.map(user => user.id === action.userId ? { ...user, cart: [...user.cart, action.item] } : user)
        }
        case CHANGE_COUNT_ITEM: {
            return state.map(user => user.id === action.userId ?
                {
                    ...user, cart: user.cart.map(item => item.id === action.itemId ?
                        { ...item, count: action.count } :
                        item)
                } :
                user)
        }
        case ADD_COUNT_TO_ITEM_EXIST: {
            return state.map(user => user.id === action.userId ?
                {
                    ...user, cart: user.cart.map(item => item.id === action.itemId ?
                        { ...item, count: item.count + action.count } :
                        item)
                } :
                user)
        }
        case DELETE_ITEM: {
            return state.map(user => user.id === action.userId ?
                { ...user, cart: user.cart.filter(item => item.id !== action.itemId) } :
                user
            )
        }

        case CLEAR_ALL_CART: {
            return state.map(user => user.id === action.userId ?
                { ...user, cart: [] } :
                user
            )
        }
        default: {
            return state;
        }
    }
};