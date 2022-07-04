import { SET_FILTER } from "../constans/filter";

export const filter = (state = 'All', action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.filter;
        }
        default: {
            return state;
        }
    }
}