import { SET_FILTER } from "../constans/filter"

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter,
})