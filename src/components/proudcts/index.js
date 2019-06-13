import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../../services/shelf/actions';

// import Spinner from '../Spinner';
// import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

// import '../Shelf/style.scss';

class Fruits extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { filters: nextFilters, sort: nextSort } = nextProps;

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, nextSort);
    }
  }

  handleFetchProducts = (
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ isLoading: true });
    this.props.fetchProducts(filters, sort, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;
    console.log(products);
    return (
      <React.Fragment>
          <div id="product" className="products">
            <div className="container">
            <div className="title"><h1>our Products</h1></div>
          <ProductList products={products} />
          <div className="clearfix"></div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.shelf.products,
  filters: state.filters.items,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Fruits);
