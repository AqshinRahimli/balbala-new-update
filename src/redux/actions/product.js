import { ADD_TO_CART } from "../type";

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload,
    };
};
