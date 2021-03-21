export const initialState = {
    basket: [],
};

// Selector for calculating total price in basket
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

 // Say item for 0 and 1 number of products in the checkout or two for more than one
export const itemOrItems = (basket) =>
    basket?.length === 0 || basket?.length === 1 ? 'item' : 'items';

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.title === action.title
            );
            let newBasket = [...state.basket];

            if (index >=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (Title: ${action.title}). It is not in the basket!`
                )
            }
            return {
                ...state,
                basket:newBasket
            }

        default:
            return state;
    }
};

export default reducer;