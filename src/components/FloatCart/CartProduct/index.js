import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';
import "../../App.css";
class CartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired
  };

  state = {
    isMouseOver: false
  };

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  
      
 

  render() {
     console.log(document.getElementById(this.props.title));
    const { product, removeProduct } = this.props;
    const classes = ['shelf-item'];



    if (!!this.state.isMouseOver) {
      classes.push('shelf-item--mouseover');
    }

    
    let finalPrice =  (product.quantity *  product.price);

    return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        />
        {/* <Thumb
          classes=".img"
          src={require(`../../../static/products/${product.sku}.jpg`)}
          alt={product.title}
        /> */}
        <div className="shelf-item__details">
          <h3 className="title">{product.title}</h3>
          <p className="desc">

            Quantity: {product.quantity}
          </p>
        </div>
        <div className="shelf-item__price">
          <p>{finalPrice}$</p>
        </div>
      </div>
    );
  }
}

export default CartProduct;
