import { ADD_ITEM, REMOVE_ITEM, SET_CART } from "../actions/actionTypes";
import Cookies from "js-cookie";

const initialState = {
    items: [],
    subtotal: 0,
    total: 0,
    tax: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            let myCart = Cookies.get("cart")
            if(myCart){
                myCart = JSON.parse(myCart)
                return myCart
            }
            return state
        case ADD_ITEM:
            // check for item
            let items
            const existingItem = state.items.find(item => item.product.id === action.payload.product.id)
            if(existingItem){
                const newQty = existingItem.qty + action.payload.qty
                const newItem = {...existingItem, qty:newQty}
                const updatedItems = state.items.filter(item => item.product.id !== existingItem.product.id);
                items = [newItem,...updatedItems]
            }else{
                items = [...state.items, action.payload]
            }
            const subtotal = state.subtotal + (action.payload.qty * action.payload.product.price)
            const tax = subtotal * 0.15
            const total = subtotal + tax
            const cart = {...state, items: items, subtotal: subtotal, tax: tax, total: total};
            Cookies.set("cart", cart)
            return cart;
        case REMOVE_ITEM:
            const ritems = state.items.filter(item => item.product.id !== action.payload.product.id);
            const rsubtotal = state.subtotal - (action.payload.qty * action.payload.product.price)
            const rtax = rsubtotal * 0.15
            const rtotal = rsubtotal + rtax
            const newCart = {...state, items: ritems, subtotal: rsubtotal, tax: rtax, total: rtotal};
            Cookies.set("cart", newCart)
            return newCart;
        default:
            return state;
    }
};

export default reducer;