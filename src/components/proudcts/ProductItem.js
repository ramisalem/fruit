import React, { Component  , useState } from 'react';
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Thumb from '../Thumb/index';
import { addProduct   } from '../../services/cart/actions';
import {  addQu } from '../../services/shelf/actions';



class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'KG' };
        
    }
    
    handleChange = (event) =>   {

    this.setState({value: event.target.value});
    this.props.onAddQ(this.props.product.id , event.target.value);

    }

    

render() {
    
    this.props.product.quantity =  1  ;
    return (
        <div className="apple">
            <Thumb
                classes="shelf-item__thumb"
                src={require(`../../static/products/${this.props.product.sku}.jpg`)}
                alt={this.props.product.title}
                data-sku={this.props.product.sku}
            />
            <h3>{this.props.product.title}</h3>
            <h5>{this.props.product.price}$</h5>
            <button onClick={() => this.props.onAddProduct(this.props.product)}> <i className="fa fa-cart-plus"></i> Add to cart</button>
        </div>
    
);
}
}  


const mapStateToProps = state => {
    return {
        quantityState: state.cart.quantity 
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddQ: (i , value ) => dispatch(addQu(i , value )),
        onAddProduct:      (p)        => dispatch(addProduct(p))
    }
}


export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(Product);


