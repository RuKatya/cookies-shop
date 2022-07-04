import { createStore, combineReducers } from "redux";
import { cart } from "./reducers/cart";
import { auth } from "./reducers/auth";
import { products } from "./reducers/product";
import { filter } from "./reducers/filter";

const rootReducer = combineReducers({ products, cart, auth, filter })

export const store = createStore(rootReducer)