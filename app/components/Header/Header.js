import React from 'react';
import { View, Image, Text, TouchableOpacity, Platform, TextInput } from 'react-native';
import { PropTypes } from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const Header = ({ onPress, cartItems, searchText, searchTextVisible, showMenu }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {showMenu ?
        <Ionicons name={`${ICON_PREFIX}-menu`} size={30} color="#D3D3D3" /> :
        <Ionicons name={`${ICON_PREFIX}-arrow-back`} size={30} color="#D3D3D3" />
      }
    </TouchableOpacity>

    {searchTextVisible ? <TextInput style={styles.textInput} 
      placeholder={ 'Search'}
      underlineColorAndroid="transparent" 
      value={searchText}
    /> : <View style={{flex: 4}}></View> }
    
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={ styles.cartTextView}>
        <Text style={ styles.cartText}>
          { cartItems }
        </Text>
      </View>
      <Ionicons name={`${ICON_PREFIX}-cart`} size={30} color="#D3D3D3" />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
  cartItems: PropTypes.number,
  searchText: PropTypes.string,
  searchTextVisible: PropTypes.bool,
  showMenu: PropTypes.bool
};

export default Header;