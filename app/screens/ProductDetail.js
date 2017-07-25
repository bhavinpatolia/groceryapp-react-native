import React, { Component } from 'react';
import { Container } from '../components/Container';
import { StatusBar, View } from 'react-native';
import { Header } from '../components/Header';
import { ImageSlider } from '../components/ImageSlider';
import { ProductPrice, ProductDescription } from '../components/Text';
import { HR } from '../components/HR';
import { AddToCart } from '../components/Button';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { addItem, removeItem, addToCart } from '../actions/cart';

class ProductDetail extends Component {
  
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    items: PropTypes.number,
    cartItems: PropTypes.number
  };

  handleOptionsPress = () => {
    this.props.navigation.goBack(null);
  };

  handleAddToCartPress = () => {
    this.props.dispatch(addToCart(1));
  };

  handleAddItemPress = () => {
    this.props.dispatch(addItem());
  };

  handleRemoveItemPress = () => {
    this.props.dispatch(removeItem());
  };

  render(){
    return(
      <Container>
        <StatusBar backgroundColor="blue" StatusBarStyle="light-content" />
        <Header 
          onPress = { this.handleOptionsPress } 
          searchTextVisible = { false } 
          showMenu = { false }
          cartItems = { this.props.cartItems }
        />
        <ImageSlider />
        <ProductPrice />  
        <HR />
        <ProductDescription />
        <HR />
        <View style={{flex: 1}}></View>
        <AddToCart 
          onAddToCartPress = { this.handleAddToCartPress }
          onAddItemPress = { this.handleAddItemPress } 
          onRemoveItemPress = { this.handleRemoveItemPress }
          items = { this.props.items }
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.selectedProduct);
  //const productDetail = state.cart.Products.filter(product => product.)
  return {
    cartItems : state.cart.Cart.length,
    items : state.cart.items
  }
};

export default connect(mapStateToProps)(ProductDetail);