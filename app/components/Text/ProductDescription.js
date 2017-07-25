import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

const ProductDescription = (rowData) => (

  <View style={styles.descriptionView}>
    <Text style={styles.descriptionTitle}>
      {"Description"}
    </Text>
    <Text style={styles.descriptionText}>
      {rowData.ProductDescription}
    </Text>
  </View>

);

ProductDescription.propTypes = {
  ProductDescription: PropTypes.string 
};

ProductDescription.defaultProps = {
  ProductDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit efficitur mauris ut condimentum. Mauris pellentesque risus quis diam consectetur, vitae vulputate orci sodales. Suspendisse convallis euismod ultricies. Proin malesuada felis sed nunc pharetra semper. Pellentesque quis aliquam justo."
};

export default ProductDescription;
