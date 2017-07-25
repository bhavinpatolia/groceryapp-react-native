import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const dimentions = Dimensions.get('window');

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 2
  },
  image: {
    width: dimentions.width,
    height: dimentions.height / 5,
    zIndex: 1
  },
  imageTextView: {
    width: dimentions.width,
    height: dimentions.height / 6,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageText: {
    fontSize: 24,
    textAlign: 'center',
    color: '$white',
    paddingTop: 20
  },
  textBoldContent: {
    fontWeight: 'bold'
  }
});