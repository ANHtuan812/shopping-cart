import React from "react";
import { Component } from "react";
import Item from "./Item";
import CartInfo from "./Cartinfo";
import {connect} from "react-redux";
class Cart extends Component {    
    showItem = (cart) =>{
        let elemetListItem = cart.map((item,index)=>{
            return(
                <Item key={index} index ={index} item={item}/>
            );
        })
        return elemetListItem;
    } 
    render() {
        let {cart} = this.props;

        return (
            
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h1 className="panel-title">Your Cart</h1>
                    </div>
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th width="4%">#</th>
                                    <th>Product Name</th>
                                    <th width="15%">Price</th>
                                    <th width="4%">Quantity</th>
                                    <th width="20%">Subtotal</th>
                                    <th width="25%">Action</th>
                                </tr>
                            </thead>
                            {/* Hien thi cac item trong cart */}
                            {this.showItem(cart)}
                            <CartInfo cart={cart}/>
                        </table>
                    </div>
                </div>
                
           
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps,null)(Cart);