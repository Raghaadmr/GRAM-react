import { SET_USER_ADDRESSES, ADD_ADDRESS } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ADDRESSES:
            const addresses = action.payload;
            return addresses;
        case ADD_ADDRESS:
            const newAddresses = [action.payload,...state];
            return newAddresses;

        default:
            return state;
    }
};

export default reducer;