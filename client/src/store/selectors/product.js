export const getAllProducts = (state) => state.products;

// export const selectProducts = (state) => state.products.filter(item => item.typeOfFood);

export const selectVisibleProducts = (state, filter) => {
    console.log(filter)
    switch (filter) {
        case 'All': {
            return state.products;
        }
        case 'Dairy': {
            return state.products.filter(todo => todo.typeOfFood === "Dairy");
        }
        case 'Vegan': {
            return state.products.filter(todo => todo.typeOfFood === "Vegan");
        }
        case 'Gluten Free': {
            return state.products.filter(todo => todo.typeOfFood === "Gluten Free");
        }
        default: {
            return state.products;
        }
    }
}