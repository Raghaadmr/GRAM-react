import { SET_COUNTRIES } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            const countries = action.payload;
            return countries;
        default:
            return state;
    }
};

export default reducer;
