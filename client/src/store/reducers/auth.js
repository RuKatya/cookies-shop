import { v4 as uuidv4 } from 'uuid';
import { ADD_NEW_USER } from '../constans/auth';

export const auth = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_USER: {
            return [...state, {
                id: uuidv4(),
                name: action.name,
                lastName: action.lastName,
                email: action.email,
                password: action.password,
                cart: []
            }];
        }
        default: {
            return state;
        }
    }
};
