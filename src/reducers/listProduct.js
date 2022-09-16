import * as types from "../constants/ActionTypes";
const initialState = [
    {
        productId: 'P001',
        productName: 'aplu',
        image: 'aplusautomation.jpg',
        description: 'mo ta san pham',
        price: 12,
        quantity: 15,
    },
    {
        productId: 'P002',
        productName: 'aplu media',
        image: 'aplus-media.jpg',
        description: 'mo ta san pham',
        price: 13,
        quantity: 0,
    },
    {
        productId: 'P003',
        productName: 'robo',
        image: 'robo_fig_combo.jpg',
        description: 'mo ta san pham',
        price: 14,
        quantity: 20,
    },
    {
        productId: 'P004',
        productName: 'target',
        image: 'target-leap-frog.jpg',
        description: 'mo ta san pham',
        price: 10,
        quantity: 50,
    },

]
const listProduct = (state = initialState, action) => {
    switch(action.type){
        case types.lIST_PRODUCT:
            return state;
        default:
        return state
    }
}

export default listProduct; 