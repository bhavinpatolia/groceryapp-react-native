import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const ImageBanner = () => (

  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('./images/vegImage.jpg')}
    >
      <View style={styles.imageTextView}>
        <Text style={styles.imageText}>
          FRESH,  <Text style={styles.textBoldContent}>ORGANIC, </Text>
        </Text>
        <Text style={styles.imageText}>
          <Text style={styles.textBoldContent}>HEALTHY,</Text>  FOOD MARKET
        </Text>
      </View>
    </Image>
  </View>

);

export default ImageBanner;
