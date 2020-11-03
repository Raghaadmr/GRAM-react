import productsReducer from "./products";
import errorsReducer from "./errors";
import userReducer from "./user";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  errorMsg: errorsReducer,
});

export default rootReducer;
