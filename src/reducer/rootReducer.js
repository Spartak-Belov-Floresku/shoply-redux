import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({ allProducts: productsReducer, userCart: cartReducer,})

export default rootReducer;