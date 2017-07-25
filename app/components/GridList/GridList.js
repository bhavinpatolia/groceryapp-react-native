import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import GridStyles from './GridStyles';
import EasyListView from 'react-native-easy-listview-gridview';
import Data from '../../data/groceryData';

const DATA_SIZE_PER_PAGE = 6;

const GridList = (data) => (
  <View style={styles.container}>
    <EasyListView
      ref={component => this.gridview = component}
      column={3}
      renderItem={GridItem}
      refreshHandler={onFetch}
      loadMoreHandler={onFetch}
    />
  </View>
);

const GridItem = (index, rowData) => (
  <TouchableOpacity onPress= {() => alert(index + 1)} key={index}>
    <View key={index} style={GridStyles.rowContainer}>
      
      <View style={GridStyles.imageView}>
        <Image resizeMode="contain" source={{uri: rowData.GroceryImage}} style={GridStyles.image} />
      </View>

      <View style={GridStyles.productTitleView}>
        <Text style={GridStyles.titleText}>
          {rowData.GroceryName}
        </Text>
      </View>
      
      <View style={GridStyles.productTitleView}>
        <Text style={GridStyles.titleText}>
          {rowData.GroceryWeight}
        </Text>
      </View>

      <View style={GridStyles.productCategoryView}>
        <Text style={GridStyles.categoryText}>
          {rowData.GroceryCategory}
        </Text>
      </View>
      <View style={GridStyles.PreviousPriceView}>
        <Text style={GridStyles.PreviousPriceText}>
          {rowData.GroceryPreviousPrice} USD
        </Text>
      </View>
      <View style={GridStyles.ActualPriceView}>
        <Text style={GridStyles.ActualPriceText}>
          {rowData.GroceryActualPrice} USD
        </Text>
      </View>
      
    </View>
  </TouchableOpacity>
)


const onFetch = (pageNo, success, failure) => {
  success(Data);
}

GridList.propTypes = {
  Products: PropTypes.object
};

export default GridList;
