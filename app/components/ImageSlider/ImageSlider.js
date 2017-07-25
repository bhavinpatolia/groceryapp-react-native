import React from 'react';
import { View, Text } from 'react-native';
import ImageSliderWidget from 'react-native-image-slider';
import styles from './styles';

const ImageSlider = () => (

  <View style={styles.container}>
    <ImageSliderWidget images={[
        'http://goorganicnyc.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/carrot.jpg',
        'https://parksandgardensuk.files.wordpress.com/2015/10/carrot-nutri-red-sugarsnax-purplesnax.jpg?w=300&h=225',
        'http://cdn.iflscience.com/images/1110e74d-504f-5b8f-a9ef-0c1c9cad8c6c/extra_large-1464388481-311-scientists-have-discovered-why-carrots-are-orange.jpg'
    ]} style={styles.imageSlider}/>
  </View>

);

export default ImageSlider;
