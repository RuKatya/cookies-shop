import { v4 as uuidv4 } from 'uuid';
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_COUNT } from "../constans/cart"

export const cart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            // return state.map(item => item.id === action.id ? { ...item, count: action.count } : [...state, {
            //     id: action.id,
            //     name: action.name,
            //     count: action.count
            // }])

            return [...state, {
                id: uuidv4(),
                idProduct: action.id,
                name: action.name,
                count: action.count
            }]
        }
        case REMOVE_FROM_CART: {
            return state.filter((todo) => todo.id !== action.id);
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
