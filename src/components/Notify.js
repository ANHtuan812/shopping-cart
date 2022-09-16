import React from 'react'
import { Component } from 'react';
import { connect } from "react-redux";

class Notify extends Component {
    render() {
        return (
            <div className="alert alert-success" role="alert" id="mnotification">
                <b>{this.props.content} </b>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        content: state.notify
    }
}
export default connect(mapStateToProps, null)(Notify);