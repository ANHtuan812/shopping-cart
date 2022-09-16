import { CART_STORAGE } from '../constants/CartStorage';
import * as types from '../constants/ActionTypes';
let initialState = [];
let cartStorage = JSON.parse(localStorage.getItem(CART_STORAGE));
initialState = (cartStorage != null && cartStorage.length > 0) ? cartStorage : initialState;
let checkExistProduct = (cart, product) => {
    for (let index = 0; index < cart.length; index++) {
        if (cart[index].product.productId === product.productId) {
            //San pham mua da co trong gio hang
            return index;
        }
    }
    return -1;
}
const cart = (state = initialState, action) => { 
    let index =-1;
    //Lay product,quantity can mua trong action
    let { product, quantity } = action;
    switch (action.type) {
        case types.ADD_PRODUCT:

            //Kiem tra san pham da co trong gio hang hay chua
            index = checkExistProduct(state, product)
            if (index > -1) {
                //San pham da ton tai trong gio hang
                //state[index] --> item: quantity, product
                state[index].quantity += quantity;
            } else {
                //san pham chua ton tai trong gio hang
                let item = { product: product, quantity: quantity };
                state.push(item);
            }
            //Luu vao trong storage
            localStorage.setItem(CART_STORAGE, JSON.stringify(state));
            return [...state];
        case types.UPDATE_ITEM:
            index = checkExistProduct(state, product);
            if (index > -1) {
                //San pham da ton tai trong gio hang->> cap nhat
                //state[index] --> item: quantity, product
                state[index].quantity = quantity;
            }
            localStorage.setItem(CART_STORAGE, JSON.stringify(state));
            return [...state];
        case types.REMOVE_ITEM:
            index = checkExistProduct(state, product);
            //xoa item trong cart theo index
            state.splice(index,1);
            localStorage.setItem(CART_STORAGE, JSON.stringify(state));
            return [...state]

        default:
            return state;
    }

}
export default cart;