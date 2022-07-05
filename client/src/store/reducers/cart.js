import { v4 as uuidv4 } from 'uuid';
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_COUNT, ADD_TO_CART_MORE } from "../constans/cart"

export const cart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return [...state, {
                id: uuidv4(),
                idProduct: action.id,
                name: action.name,
                count: action.count
            }]
        }
        case ADD_TO_CART_MORE: {
            return state.map((item) =>
                item.id === action.id ? { ...item, count: item.count + action.count } : item
            )
        }
        case REMOVE_FROM_CART: {
            return state.filter((item) => item.id !== action.id);
        }
        case CHANGE_COUNT: {
            return state.map((item) =>
                item.id === action.id ? { ...item, count: action.count } : item
            )
        }
        default: {
            return state;
        }
    }
};
