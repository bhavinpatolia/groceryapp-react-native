import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SUFFIX = Platform.OS === 'ios' ? '-outline' : '';

const AddToCart = ({ onRemoveItemPress, onAddItemPress, onAddToCartPress, items }) => (
  <View style={styles.container}>
    <View style={styles.ContainerView}>
      <TouchableOpacity style={[styles.buttonMinus, styles.paddingSideSetting]}
        onPress={onRemoveItemPress} >
        <Ionicons name={`${ICON_PREFIX}-remove${ICON_SUFFIX}`} size={30} color="#E6FCF8" /> 
      </TouchableOpacity>
      <Text style={[styles.paddingSideSetting, styles.itemNumberText]}>
        {items}
      </Text>
      <TouchableOpacity style={[styles.button, styles.paddingSideSetting]}
        onPress={onAddItemPress} >
        <Ionicons name={`${ICON_PREFIX}-add${ICON_SUFFIX}`} size={30} color="#E6FCF8" /> 
      </TouchableOpacity>
    </View>
    <View style={styles.ContainerView}>
      <TouchableOpacity style={[styles.button, styles.paddingTopSetting, styles.paddingSideSetting]}
        onPress={onAddToCartPress}>
        <Text style={styles.addButtonText}>
          {"ADD TO CART"}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

AddToCart.propTypes = {
  items: PropTypes.number
};

export default AddToCart;