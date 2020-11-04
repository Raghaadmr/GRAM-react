import { SET_ORDERS } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            const orders = action.payload;
            return orders;

        default:
            return state;
    }
};

export default reducer;