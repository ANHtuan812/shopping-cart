import React from 'react';
import { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class ListProduct extends Component {
    showListProduct = (products)=>{
        let elementListProduct = products.map((product,index)=>{
            return <Product key={index} product={product}/>
        })
        return elementListProduct;
    }
    render() {
        let {products}= this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">List Products</h1>
                    </div>
                    <div className="panel-body" id="list-product">
                        {/* LIST PRODUCT : START */}
                        {this.showListProduct(products)}
                        {/* LIST PRODUCT : END */}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.listProduct
    }
}
export default connect(mapStateToProps, null)(ListProduct);