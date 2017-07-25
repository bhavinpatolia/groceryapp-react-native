import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const dimentions = Dimensions.get('window');

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$lightGray',
    flexDirection: 'row'
  },
  ContainerView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    fontSize: 18,
    color: '#E6FCF8'    
  },
  itemNumberText: {
    fontSize: 24,
    color: '$darkGray'
  },
  addToCartView: {
    flex: 1
  },
  button: {
    borderRadius: 3,
    backgroundColor: '#7ABC51'
  },
  buttonMinus:{
    borderRadius: 3,
    backgroundColor: '$orange'
  },
  paddingSideSetting: {
    paddingLeft: 10,
    paddingRight: 10
  },
  paddingTopSetting: {
    paddingTop: 5,
    paddingBottom: 5
  }
});