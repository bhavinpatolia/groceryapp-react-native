import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const dimentions = Dimensions.get('window');

export default EStyleSheet.create({
  Container: {
    borderColor: '$lightGray', 
    width: dimentions.width - 50, 
    borderWidth: 0.7
  }
});