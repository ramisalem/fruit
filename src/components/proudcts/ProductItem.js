import React, { Component  , useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Thumb from '../Thumb/index';
import { formatPrice } from '../../services/util';
import { addProduct } from '../../services/cart/actions';



class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '1' };
    
        //this.handleChange = this.handleChange.bind(this);
      //  this.props.product.quantity = 1  ;
       
    }

    

    static propTypes = {
      fetchProducts: PropTypes.func.isRequired,
      products: PropTypes.array.isRequired,
      
    };
    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }
   

render() {
    
    return (
        <div className="apple">
            <Thumb
                classes="shelf-item__thumb"
                src={require(`../../static/products/${this.props.product.sku}.jpg`)}
                alt={this.props.product.title}
                data-sku={this.props.product.sku}
            />
            <h3>{this.props.product.title}</h3>
            <h5>{this.props.product.price}</h5>
            <select id={this.props.product.title} onChange={this.handleChange.bind(this)} value={this.state.value}>
            <option value="KG">KG</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            <button onClick={() => this.props.addProduct(this.props.product)}><i className="fas fa-cart-plus"></i> Add to cart</button>
        </div>
    
);
}
}  


// const Product = ({ product, addProduct }) => {


//     const handleChange = (event) =>  {
         
//         setValue({value: event.target.value});

//     }

//     const [value, setValue] = useState(1);
//     product.quantity =  value ;
//     // let formattedPrice = formatPrice(product.price, product.currencyId);
//     // let productInstallment;

//     // if (!!product.installments) {
//     //     const installmentPrice = product.price / product.installments;

//     //     productInstallment = (
//     //         <div className="installment">
//     //             <span>or {product.installments} x</span>
//     //             <b>
//     //                 {product.currencyFormat}
//     //                 {formatPrice(installmentPrice, product.currencyId)}
//     //             </b>
//     //         </div>
//     //     );
//     // }

//     return (

        
//             <div className="apple">
//                 <Thumb
//                     classes="shelf-item__thumb"
//                     src={require(`../../static/products/${product.sku}.jpg`)}
//                     alt={product.title}
//                     data-sku={product.sku}
//                 />
//                 <h3>{product.title}</h3>
//                 <h5>{product.price}</h5>
//                 <select id="selected-quantity"  value={value} onChange={handleChange}>
//                     <option disabled>KG</option> <option>0.5</option> <option>1</option> <option>1.5</option> <option>2</option>  <option>2.5</option>  <option>3</option>  <option>3.5</option>  <option>4</option>  <option>4.5</option> <option>5</option></select>
//                 <button onClick={() => r(product)} ><i className="fas fa-cart-plus"></i> Add to cart</button>
//             </div>
        


//     );
// };




Product.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired
};

export default connect(
    null,
    { addProduct }
)(Product);


