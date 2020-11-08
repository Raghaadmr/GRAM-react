import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Actions
<<<<<<< HEAD
import { checkForExpiredToken, fetchProducts, fetchCountries, setCart } from "./actions";
=======
import { checkForExpiredToken, fetchProducts, fetchCountries } from "./actions";
>>>>>>> e4fb474... complete checkout just need to connect with cart and user can select the country from a list


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForExpiredToken());
store.dispatch(fetchProducts());
store.dispatch(fetchCountries());
<<<<<<< HEAD
store.dispatch(setCart());
=======
>>>>>>> e4fb474... complete checkout just need to connect with cart and user can select the country from a list


export default store;
