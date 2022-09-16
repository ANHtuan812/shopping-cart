import React from "react";
import { Component } from "react";
import Title from "./components/Title";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";
import Notify from "./components/Notify";

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* TITLE : START */}
        <Title></Title>
        {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <ListProduct></ListProduct>
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <Cart></Cart>
            <Notify></Notify>
          </div>
          {/* CART : END */}
        </div>
      </div >

    );
  }

}

export default App;
