import React from 'react'
import { Component } from 'react';
import { connect } from "react-redux";
import { actUpdateItem, actRemoveItem ,actChangeNotifi} from "../actions";
import {NOTI_UPDATE_SUCCESS, NOTI_REMOVE_SUCCESS} from "../constants/Notity";
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    handleUpdate = (item) => {
        let { product } = item;
        this.props .updateItem(product,this.state.quantity);
        this.props.changeNotify(NOTI_UPDATE_SUCCESS);
    }
    handleRemove= (product)=>{
        this.props.deleteItem(product);
        this.props.changeNotify(NOTI_REMOVE_SUCCESS);
    }
    render() {
        let { index, item } = this.props;
        let { product } = item;
        let quantity = (this.state.quantity == 0) ? item.quantity : this.state.quantity;
        return (
            <tbody id="my-cart-body">
                {/* CART BODY */}
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.product.productName}</td>
                    <td>{item.product.price} USD</td>
                    <td>
                        <input
                            name="quantity"
                            type="number"
                            value={quantity}
                            min={1}
                            onChange={this.handleChange}
                        />
                    </td>
                    <td>
                        <strong>{item.product.price * quantity} USD</strong>
                    </td>
                    <td>
                        <a
                            type='button'
                            className="label label-info update-cart-item"
                            onClick={() => this.handleUpdate(item)}
                            data-product=""
                        >
                            Update
                        </a>
                        <a
                        type='butoon'
                            className="label label-danger delete-cart-item"
                            onClick={()=>this.handleRemove(product)}
                            data-product=""
                        >
                            Delete
                        </a>
                    </td>
                </tr>
            </tbody>
        );
    }

}
const mapStateToProps = (dispatch, ownProps) => {
    return{
        updateItem:(product,quantity)=>{
            dispatch(actUpdateItem(product,quantity))
        },
        changeNotify:(content)=>{
            dispatch(actChangeNotifi(content))
        },
        deleteItem:(product)=>{
            dispatch(actRemoveItem(product))
        }
    }
}
export default connect(null, mapStateToProps)(Item)