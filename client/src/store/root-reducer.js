import { combineReducers } from 'redux';
import { products } from './reducers/products';
import { cart } from './reducers/cart';
import { auth } from './reducers/auth';
import { filter } from './reducers/filter';
import { user } from './reducers/user';

export const rootReducer = combineReducers({
    products, cart, auth, filter, user
});