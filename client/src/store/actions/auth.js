import { ADD_NEW_USER } from "../constans/auth";

export const registUser = (name, lastName, email, password) => ({
    type: ADD_NEW_USER,
    name,
    lastName,
    email,
    password,
})