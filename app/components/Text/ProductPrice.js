import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

const ProductPrice = (rowData) => (

  <View style={styles.titleView}>
    <Text style={styles.productTitle}>
      {rowData.productTitle} {rowData.productWeight}
    </Text>
    <Text style={styles.productCategory}>
      {rowData.productCategory}
    </Text>
    <View style={styles.priceView}>
      <Text style={styles.productActualPriceText}>
        {rowData.productActualPrice} 
      </Text>
      <Text style={styles.productPreviousPriceText}>
        {rowData.productPreviousPrice}
      </Text>
    </View>
  </View>

);

ProductPrice.propTypes = {
  productTitle: PropTypes.string,
  productWeight: PropTypes.string,
  productCategory: PropTypes.string,
  productActualPrice: PropTypes.string,
  productPreviousPrice: PropTypes.string
};

ProductPrice.defaultProps = {
  productTitle: "Organic Carrot ",
  productWeight: "5 Kg",
  productCategory: "Vegetable",
  productActualPrice: "22.50 USD",
  productPreviousPrice: "24 USD"
};

export default ProductPrice;
