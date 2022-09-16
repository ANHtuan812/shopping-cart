import React from 'react'
import { Component } from 'react';
import { connect } from "react-redux";
import { actAddProduct, actChangeNotifi } from '../actions';
import { NOTI_GREATER_QUANTITY } from '../constants/Notity';
import * as notifies from '../constants/Notity';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }
    render() {
        let { product } = this.props;
        return (
            <div className="media product">
                <div className="media-left">
                    <a type='button'>
                        <img
                            className="media-object"
                            src={`images/${product.image}`}
                            alt="charmander"
                        />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{product.productName}</h4>
                    <p>
                        {product.description}
                    </p>
                    {this.showElementBuy(product)}
                </div>
            </div>
        );

    }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }
    handleClick = (product) => {

        //Kiem tra so luong mua co lon hon so luong con lai cua san pham khong
        if (this.state.quantity > product.quantity) {
            //So luong mua > so luong con la    
            console.log(notifies.NOTI_GREATER_QUANTITY);
            this.props.changeNotify(notifies.NOTI_GREATER_QUANTITY);
        } else {
            //Hien thi thong bao mua hang thanh cong
            this.props.changeNotify(notifies.NOTI_ADD_SUCCRESS);
            this.props.addProduct(product, this.state.quantity);
        }
    }
    showElementBuy = (product) => {
        let elementBuy = null;
        //kiem tra san pham con so luong de ban hay khong
        if (product.quantity === 0) {
            //san pham het hang
            elementBuy = <span className="price"> {product.price} USD</span>
        } else {
            //san pham con hang
            elementBuy = <div>
                <input
                    name="quantity"
                    type="number"
                    value={this.state.quantity}
                    min={1} onChange={this.handleChange}
                />
                <a type='button' data-product={1} className="price" onClick={() => this.handleClick(product)}>
                    {product.price} USD
                </a>
            </div>
        }
        return elementBuy;
    }
}

const mapPropsToState = (dispatch, ownProps) => {
    return {
        addProduct: (product, quantity) => {
            dispatch(actAddProduct(product, quantity))
        },
        changeNotify: (content) => {
            dispatch(actChangeNotifi(content))
        }
    }
}
export default connect(null, mapPropsToState)(Product)