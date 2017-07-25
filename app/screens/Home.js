import React, { Component } from 'react';
import { Container } from '../components/Container';
import { StatusBar, View, Dimensions } from 'react-native';
import { Header } from '../components/Header';
import { ImageBanner } from '../components/ImageBanner';
import { GridList } from '../components/GridList';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    cartItems: PropTypes.number
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('ProductDetail', { title: 'Product Detail' });
    console.log('options press');
  };

  
  render(){
    return(
      <Container>
        <StatusBar backgroundColor="blue" StatusBarStyle="light-content" />
        <Header onPress={this.handleOptionsPress} 
          searchTextVisible={true} 
          showMenu={true}
          cartItems={this.props.cartItems}
        />
        <ImageBanner />
        <GridList />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems : state.cart.Cart.length,
    Products: state.cart.Products
  }
};

export default connect(mapStateToProps)(Home);
