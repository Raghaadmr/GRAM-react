import { SET_USER_ADDRESSES } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ADDRESSES:
            const addresses = action.payload;
            return addresses;

        default:
            return state;
    }
};

export default reducer;