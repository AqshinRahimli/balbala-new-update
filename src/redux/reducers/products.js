import { ADD_TO_CART } from "../type";

const initialState = {
    cartList: [],
};

const products = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {

        case ADD_TO_CART:{
            return{
                ...state,
                cartList:[...state.cartList,payload]
            }
        }

        default: {
            return state;
        }
    }
}

export default products