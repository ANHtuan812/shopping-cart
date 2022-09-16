import {combineReducers} from "redux";
import notify from "./notify";
import listProduct from "./listProduct";
import cart from "./cart";

export const reducer = combineReducers({notify, listProduct, cart});
